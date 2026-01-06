import { useMemo } from 'react';
import { sneakersData } from '../../entities/sneaker';

export const useTotalPrice = (cartIds: number[]) => {
  return useMemo(() => {
    return cartIds.reduce((sum, itemId) => {
      const sneaker = sneakersData.find((s) => s.id === itemId);
      return sum + (sneaker?.price || 0);
    }, 0);
  }, [cartIds]);
};
