import { apiClient } from './client';
import type { OrderFormData } from '../../entities/order';

export interface OrderPayload extends OrderFormData {
  items: number[];
  totalPrice: number;
  orderDate: string;
}

export interface OrderResponse {
  id: string;
  items: number[];
  totalPrice: number;
  name: string;
  phone: string;
  email: string;
  city: string;
  orderDate: string;
}

export const ordersApi = {
  sendOrder: async (orderData: OrderPayload): Promise<OrderResponse> => {
    return apiClient.post<OrderResponse>('/orderSneakersShop', orderData);
  },
};
