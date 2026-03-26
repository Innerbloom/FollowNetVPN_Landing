/**
 * Планы Premium на лендинге и на /checkout (должны совпадать с ценами в Paddle Catalog).
 */
export type PremiumPlanId = 'm1' | 'm3' | 'm6';

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

/** USD, как в маркетинге: 1 мес $4.99; 3 мес $12.99 (~$4.33/мес); 6 мес $21.99 (~$3.67/мес) */
export const PREMIUM_PLANS: readonly PremiumPlanRow[] = [
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
  {
    id: 'm3',
    labelRu: '3 месяца',
    labelEn: '3 months',
    total: '$12.99',
    perMonthRu: '$4.33/мес',
    perMonthEn: '$4.33/mo',
    saveRu: 'экономия 13%',
    saveEn: 'save 13%',
  },
  {
    id: 'm6',
    labelRu: '6 месяцев',
    labelEn: '6 months',
    total: '$21.99',
    perMonthRu: '$3.67/мес',
    perMonthEn: '$3.67/mo',
    saveRu: 'экономия 27%',
    saveEn: 'save 27%',
  },
] as const;
