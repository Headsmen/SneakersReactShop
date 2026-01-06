import { useMemo } from 'react';
import { sneakersData, type Sneaker } from '../../entities/sneaker';

export function useFilteredSneakers(ids: number[]): Sneaker[] {
  return useMemo(() => {
    return sneakersData.filter((sneaker) => ids.includes(sneaker.id));
  }, [ids]);
}
