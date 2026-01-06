import { useState, useMemo } from 'react';
import { useShopStore } from '../../../shared/store/shopStore';
import { sneakersData } from '../../../entities/sneaker';
import { useDebounce } from '../../../shared/hooks/useDebounce';

export function useSneakersList() {
  const { toggleFavorite, isFavorite, toggleCart, isInCart } = useShopStore();
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  const filteredSneakers = useMemo(() => {
    if (!debouncedSearchQuery.trim()) {
      return sneakersData;
    }

    const query = debouncedSearchQuery.toLowerCase();
    return sneakersData.filter((sneaker) =>
      sneaker.title.toLowerCase().includes(query)
    );
  }, [debouncedSearchQuery]);

  return {
    sneakers: filteredSneakers,
    searchQuery,
    setSearchQuery,
    toggleFavorite,
    isFavorite,
    toggleCart,
    isInCart,
  };
}
