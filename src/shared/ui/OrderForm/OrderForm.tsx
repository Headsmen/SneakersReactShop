import { TextInput, Button, Stack } from '@mantine/core';
import type { UseFormReturnType } from '@mantine/form';
import type { OrderFormData } from '../../../entities/order';
import { formatPrice } from '../../lib/formatPrice';
import styles from './OrderForm.module.scss';

interface OrderFormProps {
  form: UseFormReturnType<OrderFormData>;
  onSubmit: (values: OrderFormData) => void;
  totalPrice: number;
  isLoading?: boolean;
  submitButtonText?: string;
}

export const OrderForm = ({
  form,
  onSubmit,
  totalPrice,
  isLoading = false,
  submitButtonText = 'Подтвердить заказ',
}: OrderFormProps) => {
  return (
    <form onSubmit={form.onSubmit(onSubmit)} noValidate>
      <Stack gap="md">
        <div className={styles.totalPrice}>
          Итого к оплате: <span>{formatPrice(totalPrice)} руб.</span>
        </div>

        <TextInput
          label="Имя"
          placeholder="Введите ваше имя"
          withAsterisk
          data-autofocus
          {...form.getInputProps('name')}
        />

        <TextInput
          label="Номер телефона"
          placeholder="+7 (999) 123-45-67"
          withAsterisk
          {...form.getInputProps('phone')}
        />

        <TextInput
          label="Email"
          placeholder="example@mail.ru"
          withAsterisk
          {...form.getInputProps('email')}
        />

        <TextInput
          label="Город"
          placeholder="Введите ваш город"
          withAsterisk
          {...form.getInputProps('city')}
        />

        <Button type="submit" fullWidth className={styles.submitButton} loading={isLoading}>
          {submitButtonText}
        </Button>
      </Stack>
    </form>
  );
};
