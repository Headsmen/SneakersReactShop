import { SneakersGrid } from "../../../shared/ui/SneakersGrid";
import { SearchInput } from "../../../shared/ui/SearchInput";
import { ImagePepe } from "../../cardWidgets/ui/ImagePepe";
import { useSneakersList } from "../model/useSneakersList";
import styles from "./SneakersList.module.scss";

export const SneakersList = () => {
  const {
    sneakers,
    searchQuery,
    setSearchQuery,
    toggleFavorite,
    isFavorite,
    toggleCart,
    isInCart,
  } = useSneakersList();

  return (
    <div>
      <ImagePepe />
      <div className={styles.sneakersList}>
        <div className={styles.header}>
          <h2 className={styles.title}>Все кроссовки</h2>
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Поиск..."
          />
        </div>
        <SneakersGrid
          sneakers={sneakers}
          onFavoriteToggle={toggleFavorite}
          onCartToggle={toggleCart}
          isFavorite={isFavorite}
          isInCart={isInCart}
          emptyMessage="Ничего не найдено"
        />
      </div>
    </div>
  );
};
