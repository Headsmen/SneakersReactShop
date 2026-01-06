import { useMutation } from '@tanstack/react-query';
import { ordersApi, type OrderPayload } from '../api/orders';

export const useSendOrder = () => {
  return useMutation({
    mutationFn: (orderData: OrderPayload) => ordersApi.sendOrder(orderData),
  });
};
