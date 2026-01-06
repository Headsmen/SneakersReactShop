import { SneakersGrid } from "../../../shared/ui/SneakersGrid";
import { OrderSummary } from "../../../shared/ui/OrderSummary";
import { OrderModal } from "../../../features/order";
import { useCartList } from "../model/useCartList";
import { useCartListOrder } from "../model/useCartListOrder";
import styles from "./CartList.module.scss";

export const CartList = () => {
  const {
    sneakers,
    totalPrice,
    toggleFavorite,
    isFavorite,
    toggleCart,
    isInCart,
    handleCheckout
  } = useCartList();

  const {
    isOrderModalOpen,
    closeOrderModal,
    handleOrderSubmit,
    isPending
  } = useCartListOrder(totalPrice);

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

      <OrderModal
        opened={isOrderModalOpen}
        onClose={closeOrderModal}
        onSubmit={handleOrderSubmit}
        totalPrice={totalPrice}
        isLoading={isPending}
      />
    </div>
  );
};
