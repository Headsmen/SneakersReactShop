import { useMemo } from 'react';
import { useShopStore } from '../../../entities/shop';
import { useFilteredSneakers } from '../../../shared/hooks/useFilteredSneakers';

export function useCartList() {
  const { cart, toggleFavorite, isFavorite, toggleCart, isInCart } = useShopStore();
  const cartSneakers = useFilteredSneakers(cart);

  const totalPrice = useMemo(() => {
    return cartSneakers.reduce((sum, sneaker) => sum + sneaker.price, 0);
  }, [cartSneakers]);

  return {
    sneakers: cartSneakers,
    totalPrice,
    toggleFavorite,
    isFavorite,
    toggleCart,
    isInCart,
  };
}
