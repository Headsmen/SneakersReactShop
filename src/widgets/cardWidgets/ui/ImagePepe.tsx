import imageFull from "../../../../assets/imageFull.svg";
import styles from './CardWidgets.module.scss'

export function ImagePepe() {
  return (
    <div className={styles.bannerContainer}>
      <img className={styles.imgPepe} src={imageFull} alt="Stan Smith Forever" />
    </div>
  );
}

