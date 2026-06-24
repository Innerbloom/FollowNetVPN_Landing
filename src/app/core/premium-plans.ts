/**
 * Планы Premium на лендинге (информативно; покупка — в App Store).
 * Цены ориентировочные для US; фактические — в приложении.
 */
export type PremiumPlanId = 'y1' | 'm1';

export type PremiumPlanRow = {
  id: PremiumPlanId;
  labelRu: string;
  labelEn: string;
  /** Полная сумма за период (как на сайте) */
  total: string;
  perMonthRu: string;
  perMonthEn: string;
  saveRu: string | null;
  saveEn: string | null;
};

/** USD: 1 мес $4.99; 1 год $39.99 (~$3.33/мес) */
export const PREMIUM_PLANS: readonly PremiumPlanRow[] = [
  {
    id: 'y1',
    labelRu: '1 год',
    labelEn: '1 year',
    total: '$39.99',
    perMonthRu: '$3.33/мес',
    perMonthEn: '$3.33/mo',
    saveRu: 'экономия 33%',
    saveEn: 'save 33%',
  },
  {
    id: 'm1',
    labelRu: '1 месяц',
    labelEn: '1 month',
    total: '$4.99',
    perMonthRu: '$4.99/мес',
    perMonthEn: '$4.99/mo',
    saveRu: null,
    saveEn: null,
  },
] as const;
