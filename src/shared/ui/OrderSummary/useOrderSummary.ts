import { TAX_RATE } from '../../config/constants';

export const useOrderSummary = (total: number) => {
  const tax = Math.round(total * TAX_RATE);

  return { tax };
};
