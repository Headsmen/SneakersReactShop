import { SneakersGrid } from "../../../shared/ui/SneakersGrid";
import { OrderSummary } from "../../../shared/ui/OrderSummary";
import { useCartList } from "../model/useCartList";
import { useCartListModal } from "../model/useCartListModal";
import styles from "./CartList.module.scss";

export const CartList = () => {
  const {
    sneakers,
    totalPrice,
    toggleFavorite,
    isFavorite,
    toggleCart,
    isInCart,
  } = useCartList();

  const { openOrderModal } = useCartListModal();

  const handleCheckout = () => {
    openOrderModal(totalPrice);
  };

  return (
    <div className={styles.cartList}>
      <h1 className={styles.title}>Корзина</h1>
      <SneakersGrid
        sneakers={sneakers}
        onFavoriteToggle={toggleFavorite}
        onCartToggle={toggleCart}
        isFavorite={isFavorite}
        isInCart={isInCart}
        emptyMessage="Корзина пуста"
      />
      {sneakers.length > 0 && (
        <OrderSummary total={totalPrice} onCheckout={handleCheckout} />
      )}
    </div>
  );
};
