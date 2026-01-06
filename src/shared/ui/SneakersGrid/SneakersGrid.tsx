import { SneakerCard } from '../SneakerCard';
import type { Sneaker } from '../../../entities/sneaker';
import styles from './SneakersGrid.module.scss';

interface SneakersGridProps {
  sneakers: Sneaker[];
  onFavoriteToggle: (id: number) => void;
  onCartToggle: (id: number) => void;
  isFavorite: (id: number) => boolean;
  isInCart: (id: number) => boolean;
  emptyMessage?: string;
}

export const SneakersGrid = ({
  sneakers,
  onFavoriteToggle,
  onCartToggle,
  isFavorite,
  isInCart,
  emptyMessage = 'Нет товаров',
}: SneakersGridProps) => {
  if (sneakers.length === 0) {
    return (
      <p className={styles.emptyMessage}>
        {emptyMessage}
      </p>
    );
  }

  return (
    <div className={styles.grid}>
      {sneakers.map((sneaker) => (
        <SneakerCard
          key={sneaker.id}
          image={sneaker.image}
          title={sneaker.title}
          price={sneaker.price}
          onFavorite={() => onFavoriteToggle(sneaker.id)}
          onAdd={() => onCartToggle(sneaker.id)}
          isFavorite={isFavorite(sneaker.id)}
          isInCart={isInCart(sneaker.id)}
        />
      ))}
    </div>
  );
};
