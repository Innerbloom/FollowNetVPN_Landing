const PROBE_TIMEOUT_MS = 4000;
/** Our own choice of public STUN: answers the browser's address, sees nothing else. */
const STUN_SERVER = 'stun:stun.cloudflare.com:3478';

/** The IPv6 address this browser leaves from; null when there is no IPv6 path. */
export async function detectIpv6(): Promise<string | null> {
  try {
    const res = await fetch('https://api6.ipify.org?format=json', {
      signal: AbortSignal.timeout(PROBE_TIMEOUT_MS),
    });
    const body = (await res.json()) as { ip?: string };
    return body.ip?.includes(':') ? body.ip : null;
  } catch {
    return null;
  }
}

/** Addresses in ICE candidates; null when the browser has no WebRTC. */
export async function detectWebRtcAddresses(): Promise<string[] | null> {
  if (typeof RTCPeerConnection === 'undefined') return null;
  const found = new Set<string>();
  let pc: RTCPeerConnection;
  try {
    pc = new RTCPeerConnection({ iceServers: [{ urls: STUN_SERVER }] });
  } catch {
    return null;
  }
  try {
    pc.createDataChannel('ip-check');
    await new Promise<void>((resolve, reject) => {
      const timer = setTimeout(resolve, PROBE_TIMEOUT_MS);
      pc.onicecandidate = (event) => {
        if (!event.candidate) {
          clearTimeout(timer);
          resolve();
          return;
        }
        const address = candidateAddress(event.candidate.candidate);
        if (address) found.add(address);
      };
      pc.createOffer()
        .then((offer) => pc.setLocalDescription(offer))
        .catch(reject);
    });
    return [...found];
  } catch {
    return null;
  } finally {
    pc.close();
  }
}

/** `candidate:… 1 udp 2122260223 1.2.3.4 51234 typ srflx` → the address field. */
export function candidateAddress(candidate: string): string | null {
  const address = candidate.split(' ')[4];
  return address && !address.endsWith('.local') ? address : null;
}

function isPrivateAddress(address: string): boolean {
  if (address.includes(':')) return /^(fe80|fc|fd|::1)/i.test(address);
  const [a, b] = address.split('.').map(Number);
  return (
    a === 10 ||
    a === 127 ||
    a === 0 ||
    (a === 192 && b === 168) ||
    (a === 172 && b >= 16 && b <= 31) ||
    (a === 169 && b === 254) ||
    (a === 100 && b >= 64 && b <= 127)
  );
}

/** A public address other than the ones sites already see; that is a WebRTC leak. */
export function otherPublicAddress(
  addresses: readonly string[],
  publicIp: string,
  ipv6: string | null,
): string | null {
  return addresses.find((a) => !isPrivateAddress(a) && a !== publicIp && a !== ipv6) ?? null;
}
