import { Modal, TextInput, Button, Stack } from '@mantine/core';
import type { OrderFormData } from '../../../entities/order';
import { useOrderModal } from '../model/useOrderModal';
import { formatPrice } from '../../../shared/lib/formatPrice';
import styles from './OrderModal.module.scss';

interface OrderModalProps {
  opened: boolean;
  onClose: () => void;
  onSubmit?: (data: OrderFormData) => void;
  totalPrice: number;
  isLoading?: boolean;
}

export const OrderModal = ({ opened, onClose, onSubmit, totalPrice, isLoading }: OrderModalProps) => {
  const { form } = useOrderModal();

  const handleSubmit = (values: OrderFormData) => {
    onSubmit?.(values);
    form.reset();
    onClose();
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Оформление заказа"
      centered
      size="md"
      classNames={{
        title: styles.modalTitle,
        header: styles.modalHeader,
        body: styles.modalBody
      }}
    >
      <form onSubmit={form.onSubmit(handleSubmit)} noValidate>
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
            Подтвердить заказ
          </Button>
        </Stack>
      </form>
    </Modal>
  );
};
