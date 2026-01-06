import styles from "./HeaderWidg.module.scss";
import logo from "../../../../assets/logo.svg";
import { Heart, ShoppingCart, User } from "tabler-icons-react";
import { Link } from "react-router-dom";
import { useHeaderWidg } from "../model/useHeaderWidg";
import { formatPrice } from "../../../shared/lib/formatPrice";

export const HeaderWidg = () => {
  const {
    favorites,
    cart,
    totalPrice,
    handleCartClick,
    handleFavoritesClick
  } = useHeaderWidg();

  return (
    <div className={styles.marginHeader}>
      <div className={styles.HeaderLine}>
        <Link to="/" className={`${styles.OneLineText} ${styles.logoLink}`}>
          <img src={logo} alt="Logo" />
          <div className={styles.LogoName}>
            <p className={styles.Logo}>REACT SNEAKERS</p>
            <p className={styles.Slogan}>Магазин лучших кроссовок</p>
          </div>
        </Link>
        <div className={styles.SecondHeaderText}>
          <div
            className={styles.cartWrapper}
            onClick={handleCartClick}
          >
            <div className={styles.iconWrapper}>
              <ShoppingCart color="#9B9B9B" />
              {cart.length > 0 && (
                <span className={styles.badge}>{cart.length}</span>
              )}
            </div>
            {totalPrice > 0 && (
              <span className={styles.cartPrice}>
                {formatPrice(totalPrice)} руб.
              </span>
            )}
          </div>
          <div
            className={styles.isFavoriteHeart}
            onClick={handleFavoritesClick}
          >
            <div className={styles.iconWrapper}>
              <Heart color="#9B9B9B" />
              {favorites.length > 0 && (
                <span className={styles.badge}>{favorites.length}</span>
              )}
            </div>
            <span>Закладки</span>
          </div>
          <div className={styles.profileSection}>
            <User color="#9B9B9B" />
            <p>Профиль</p>
          </div>
        </div>
      </div>
    </div>
  );
};
