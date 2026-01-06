import { useShopStore } from '../../../shared/store/shopStore';
import { useFilteredSneakers } from '../../../shared/hooks/useFilteredSneakers';

export function useFavoritesList() {
  const { favorites, toggleFavorite, isFavorite, toggleCart, isInCart } = useShopStore();
  const favoriteSneakers = useFilteredSneakers(favorites);

  return {
    sneakers: favoriteSneakers,
    toggleFavorite,
    isFavorite,
    toggleCart,
    isInCart,
  };
}
