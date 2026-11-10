# FollowNet — facts the blog writer may use

The n8n "FollowNet Blog" workflow sends this file to the writer and the fact-check editor.
Anything about FollowNet that is not here must not appear in an article. Edit this file when the
product changes (new server, new feature, removed feature) — the robot reads it before every post.

## Product
- FollowNet VPN: apps for iPhone and iPad, Mac (App Store), Android (Google Play), and a Chrome extension.
- One account works on every platform. Login without a password: a one-time code sent by email,
  or Sign in with Apple / Google. Guest mode exists without an account.
- Free plan: core servers and a weekly traffic cap that resets every Monday. Do not state the cap size.
- Premium: all servers, no weekly cap, up to 5 devices on one subscription.
  Do not state prices or discounts.
- Built by a small independent team (solo developer) from Ukraine.

## Protocols (Settings → VPN Protocol)
- Smart (default): Smart Connect picks a working protocol for the current network and falls back to
  another one if a connection attempt fails.
- IKEv2 — built into iOS/macOS, stable when switching between Wi‑Fi and mobile data.
- WireGuard — fast, modern, low battery use.
- AmneziaWG — WireGuard variant whose traffic looks less like a VPN to network filters.
- Hysteria2 — QUIC/UDP based, good on lossy or long-distance connections.

## Servers
France, Germany, Finland, United Kingdom, Spain, Canada, USA (Virginia and Oregon).
"Optimal location" picks the server with the lowest ping.

## Features
- Auto-connect: Disabled, Wi‑Fi only, mobile data only, Always.
- Kill switch: if the VPN drops unexpectedly, internet stays blocked until the VPN reconnects. Tapping
  Disconnect yourself is not a drop — internet works normally after a manual Disconnect.
- Split tunneling: choose which sites go outside the VPN (iPhone, iPad, Mac).
- DNS presets: Default, Cloudflare, Google, AdGuard (ad blocking), AdGuard Family, Quad9.
- Network Profiles: bundle protocol + DNS + auto-connect + server choice; presets Smart, Public Wi‑Fi,
  Travel, Restricted, plus custom profiles.
- In-app Speed Test (download, upload, ping, jitter) and traffic statistics.
- iOS: Home Screen widget, Control Center control, Live Activity, Apple Shortcuts (connect, disconnect,
  apply profile).
- Chrome extension: protects Chrome traffic only (browser proxy), blocks ads with EasyList/AdGuard lists,
  stops browser traffic if the proxy drops. For the whole computer use the Mac app.

## Where things are in the app (the ONLY menu paths you may write for FollowNet)
- Settings → VPN Protocol · Settings → DNS · Settings → Auto-connect · Settings → Kill switch · Settings → Split tunneling
  · Settings → Network Profiles · Settings → Shortcuts Automation
- Main screen: the big Connect button and the server list.
Any other FollowNet screen, button or feature name (e.g. "Quick Connect") does not exist — never invent one.

## Writing rules (also enforced by the editor pass)
- Do not claim "no logs", "zero logs", "100% anonymous", "unhackable", military-grade, or speed numbers.
- Do not promise access to specific streaming catalogs, banking apps or blocked services, and do not use
  the words "unblock", "bypass", "circumvent", "censorship", "government" — write about privacy,
  public Wi‑Fi, travel, and reliable connections on difficult networks instead.
- Honest about limits: a VPN does not stop phishing, malware, or tracking by logged-in accounts.
- No invented statistics, studies, quotes, or user stories.
- Audience uses phones and Macs: give iPhone / Android / Mac steps; skip Windows Control Panel walkthroughs.
- Mention FollowNet naturally where it actually helps (1–3 times), not in every section.
- No URLs or markdown in the text (it is shown as plain text; the page already has download buttons).

## Not released yet — do NOT mention until moved above
VLESS (Reality) protocol, Multi-hop, Tor server, LAN access toggle, IP & leak check screen.
