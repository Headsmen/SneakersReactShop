import { modals } from '@mantine/modals';
import { OrderForm } from '../../../shared/ui/OrderForm';
import { useOrderForm } from '../../../shared/ui/OrderForm/useOrderForm';
import { useOrderFeature } from '../../../features/order/model/useOrderFeature';

const OrderModalContent = ({ totalPrice }: { totalPrice: number }) => {
  const { form } = useOrderForm();
  const { handleOrderSubmit, isPending } = useOrderFeature();

  return (
    <OrderForm
      form={form}
      onSubmit={(data) => handleOrderSubmit(data, totalPrice)}
      totalPrice={totalPrice}
      isLoading={isPending}
    />
  );
};

export const useCartListModal = () => {
  const openOrderModal = (totalPrice: number) => {
    modals.open({
      title: 'Оформление заказа',
      centered: true,
      size: 'md',
      children: <OrderModalContent totalPrice={totalPrice} />,
    });
  };

  return {
    openOrderModal,
  };
};
