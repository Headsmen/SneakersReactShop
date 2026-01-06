import { useMemo } from 'react';
import { useShopStore } from '../../../shared/store/shopStore';
import { useModal } from '../../../app/providers/ModalContext';
import { useFilteredSneakers } from '../../../shared/hooks/useFilteredSneakers';

export function useCartList() {
  const { cart, toggleFavorite, isFavorite, toggleCart, isInCart } = useShopStore();
  const { openOrderModal } = useModal();
  const cartSneakers = useFilteredSneakers(cart);

  const totalPrice = useMemo(() => {
    return cartSneakers.reduce((sum, sneaker) => sum + sneaker.price, 0);
  }, [cartSneakers]);

  const handleCheckout = () => {
    openOrderModal();
  };

  return {
    sneakers: cartSneakers,
    totalPrice,
    toggleFavorite,
    isFavorite,
    toggleCart,
    isInCart,
    handleCheckout,
  };
}
