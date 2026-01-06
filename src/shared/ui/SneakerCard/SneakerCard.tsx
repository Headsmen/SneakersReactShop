import { Heart, SquarePlus, Check } from "tabler-icons-react";
import { formatPrice } from "../../lib/formatPrice";
import styles from "./SneakerCard.module.scss";

interface SneakerCardProps {
  image: string;
  title: string;
  price: number;
  onFavorite?: () => void;
  onAdd?: () => void;
  isFavorite?: boolean;
  isInCart?: boolean;
}

export const SneakerCard = ({
  image,
  title,
  price,
  onFavorite,
  onAdd,
  isFavorite = false,
  isInCart = false,
}: SneakerCardProps) => {
  return (
    <div className={styles.card}>
      <button className={styles.favoriteBtn} onClick={onFavorite}>
        {isFavorite ? <Heart color="#FF6B6B" fill="#FF6B6B" /> : <Heart color="#9B9B9B" />}
      </button>
      <img src={image} alt={title} className={styles.sneakerImage} />
      <p className={styles.title}>{title}</p>
      <div className={styles.priceContainer}>
        <div>
          <p className={styles.priceLabel}>Цена:</p>
          <p className={styles.price}>{formatPrice(price)} руб.</p>
        </div>
        <button className={styles.addBtn} onClick={onAdd}>
          {isInCart ? <Check color="#4CAF50" /> : <SquarePlus color="#9B9B9B" />}
        </button>
      </div>
    </div>
  );
};
