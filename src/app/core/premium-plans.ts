/**
 * Premium plan pricing on the website (USD — aligned with App Store tiers).
 * Actual charge amount comes from API (WAYFORPAY_PLAN_*_AMOUNT).
 */
export type PremiumPlanId = 'y1' | 'm1';

export type PremiumPlanRow = {
  id: PremiumPlanId;
  /** Full period price in USD */
  amountUsd: number;
};

export const PREMIUM_PLANS: readonly PremiumPlanRow[] = [
  { id: 'y1', amountUsd: 39.99 },
  { id: 'm1', amountUsd: 4.99 },
] as const;

const usdFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function formatPremiumUsd(amount: number): string {
  return usdFormatter.format(amount);
}

export function premiumPlanTotal(plan: PremiumPlanRow): string {
  return formatPremiumUsd(plan.amountUsd);
}

export function premiumPlanPerMonth(plan: PremiumPlanRow, suffix: string): string {
  if (plan.id === 'm1') {
    return `${formatPremiumUsd(plan.amountUsd)}${suffix}`;
  }
  const perMonth = plan.amountUsd / 12;
  return `~${formatPremiumUsd(perMonth)}${suffix}`;
}

export function premiumPlanSavePercent(plan: PremiumPlanRow): number | null {
  if (plan.id !== 'y1') return null;
  const monthly = PREMIUM_PLANS.find((p) => p.id === 'm1');
  if (!monthly) return null;
  const yearlyIfMonthly = monthly.amountUsd * 12;
  const saved = 1 - plan.amountUsd / yearlyIfMonthly;
  return Math.round(saved * 100);
}
