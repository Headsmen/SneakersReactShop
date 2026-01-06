import { SneakersGrid } from "../../../shared/ui/SneakersGrid";
import { useFavoritesList } from "../model/useFavoritesList";
import styles from "./FavoritesList.module.scss";

export const FavoritesList = () => {
  const { sneakers, toggleFavorite, isFavorite, toggleCart, isInCart } = useFavoritesList();

  return (
    <div className={styles.favoritesList}>
      <h1 className={styles.title}>Закладки</h1>
      <SneakersGrid
        sneakers={sneakers}
        onFavoriteToggle={toggleFavorite}
        onCartToggle={toggleCart}
        isFavorite={isFavorite}
        isInCart={isInCart}
        emptyMessage="У вас пока нет закладок"
      />
    </div>
  );
};
