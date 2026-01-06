import { useOrderSummary } from './useOrderSummary';
import { formatPrice } from '../../lib/formatPrice';
import styles from './OrderSummary.module.scss';

interface OrderSummaryProps {
  total: number;
  onCheckout?: () => void;
}

export const OrderSummary = ({ total, onCheckout }: OrderSummaryProps) => {
  const { tax } = useOrderSummary(total);

  return (
    <div className={styles.summary}>
      <div className={styles.row}>
        <span className={styles.label}>Итого:</span>
        <span className={styles.value}>{formatPrice(total)} руб.</span>
      </div>
      <div className={styles.row}>
        <span className={styles.label}>Налог 5%:</span>
        <span className={styles.value}>{formatPrice(tax)} руб.</span>
      </div>
      <button className={styles.checkoutBtn} onClick={onCheckout}>
        Оформить заказ
        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 7H14.7143" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.71436 1L14.7144 7L8.71436 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
};
