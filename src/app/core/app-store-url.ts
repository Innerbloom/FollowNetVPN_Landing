import { environment } from '../../environments/environment';

/** App Store link with optional Apple campaign token (`ct`) when provider ID is configured. */
export function appStoreUrl(campaignToken?: string): string {
  const base = environment.iosAppStoreUrl.trim();
  const pt = environment.iosAppStoreProviderToken?.trim() ?? '';
  if (!pt) return base;

  const ct = sanitizeCampaignToken(campaignToken ?? 'website');
  const url = new URL(base);
  url.searchParams.set('pt', pt);
  url.searchParams.set('ct', ct);
  url.searchParams.set('mt', '8');
  return url.toString();
}

function sanitizeCampaignToken(raw: string): string {
  const cleaned = raw.trim().slice(0, 40).replace(/[^a-zA-Z0-9_-]/g, '_');
  return cleaned || 'website';
}
