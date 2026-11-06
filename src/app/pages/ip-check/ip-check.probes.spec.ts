import { candidateAddress, otherPublicAddress } from './ip-check.probes';

describe('ip-check probes', () => {
  it('reads the address from an ICE candidate and skips mDNS names', () => {
    expect(candidateAddress('candidate:1 1 udp 2122 203.0.113.9 51234 typ srflx')).toBe('203.0.113.9');
    expect(candidateAddress('candidate:1 1 udp 2122 a1b2.local 51234 typ host')).toBeNull();
  });

  it('flags only a public address sites do not already see', () => {
    expect(otherPublicAddress(['192.168.1.5', '10.0.0.2'], '8.8.8.8', null)).toBeNull();
    expect(otherPublicAddress(['8.8.8.8'], '8.8.8.8', null)).toBeNull();
    expect(otherPublicAddress(['2001:db8::1'], '8.8.8.8', '2001:db8::1')).toBeNull();
    expect(otherPublicAddress(['1.1.1.1'], '8.8.8.8', null)).toBe('1.1.1.1');
  });
});
