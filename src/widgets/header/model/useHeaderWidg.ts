import { useNavigate } from 'react-router-dom';
import { useShopStore } from '../../../shared/store/shopStore';
import { useTotalPrice } from '../../../shared/hooks/useTotalPrice';

export const useHeaderWidg = () => {
  const { favorites, cart } = useShopStore();
  const navigate = useNavigate();
  const totalPrice = useTotalPrice(cart);

  const handleCartClick = () => {
    navigate('/cart');
  };

  const handleFavoritesClick = () => {
    navigate('/favorites');
  };

  return {
    favorites,
    cart,
    totalPrice,
    handleCartClick,
    handleFavoritesClick
  };
};
