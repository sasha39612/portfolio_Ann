import { ImagePropsType } from '../../../interfaces/common';
import ImageComponent from '../image/Image';
import styles from './imagesMulti.module.scss';

const ImagesMulti = ({ images }: { images: ImagePropsType[] }) => {
  return (
    <section className={styles.wrapper}>
      {Array.isArray(images) ? (
        <ul className={styles.container}>
          {images.map((image) => (
            <li key={image.id} className={styles[image?.className ?? '']}>
              <ImageComponent
                {...image}
                className={styles[image?.className ?? '']}
              />
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
};

export default ImagesMulti;
