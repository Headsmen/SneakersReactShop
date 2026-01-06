import { notifications } from '@mantine/notifications';
import { useModal } from '../../../app/providers/ModalContext';
import { useSendOrder } from '../../../shared/hooks/useSendOrder';
import { useShopStore } from '../../../shared/store/shopStore';
import type { OrderFormData } from '../../../entities/order';
import { formatPrice } from '../../../shared/lib/formatPrice';

export const useCartListOrder = (totalPrice: number) => {
  const { isOrderModalOpen, closeOrderModal } = useModal();
  const { mutate: sendOrder, isPending } = useSendOrder();
  const { cart, clearCart } = useShopStore();

  const handleOrderSubmit = (data: OrderFormData) => {
    const orderPayload = {
      ...data,
      items: cart,
      totalPrice,
      orderDate: new Date().toISOString(),
    };

    sendOrder(orderPayload, {
      onSuccess: () => {
        notifications.show({
          title: 'Заказ успешно оформлен!',
          message: `Имя: ${data.name}\nТелефон: ${data.phone}\nEmail: ${data.email}\nГород: ${data.city}\nСумма: ${formatPrice(totalPrice)} руб.`,
          color: 'green',
          autoClose: 5000,
        });
        clearCart();
        closeOrderModal();
      },
      onError: (error) => {
        notifications.show({
          title: 'Ошибка при оформлении заказа',
          message: error.message,
          color: 'red',
          autoClose: 5000,
        });
      },
    });
  };

  return {
    isOrderModalOpen,
    closeOrderModal,
    handleOrderSubmit,
    isPending,
  };
};
