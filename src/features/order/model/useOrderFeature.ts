import { notifications } from '@mantine/notifications';
import { modals } from '@mantine/modals';
import { useSendOrder, type OrderFormData } from '../../../entities/order';
import { useShopStore } from '../../../entities/shop';
import { formatPrice } from '../../../shared/lib/formatPrice';

export const useOrderFeature = () => {
  const { mutate: sendOrder, isPending } = useSendOrder();
  const { cart, clearCart } = useShopStore();

  const handleOrderSubmit = (data: OrderFormData, totalPrice: number) => {
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
        modals.closeAll();
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
    handleOrderSubmit,
    isPending,
  };
};
