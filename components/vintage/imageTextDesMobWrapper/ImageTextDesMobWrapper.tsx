import { ImageTextDesMobTypeWrapper } from '../../../interfaces/common';
import ImageTextDesMob from '../../ui/imageTextDesMob/ImageTextDesMob';
import styles from './imageTextDesMobWrapper.module.scss';

const ImageTextDesMobWrapper = ({
  title,
  classNameTitle,
  classNameWrapper,
  imageTextVintageDesMob,
}: ImageTextDesMobTypeWrapper) => {
  return (
    <>
      <h2 className={styles[classNameTitle ?? '']}>{title}</h2>
      <ul className={styles[classNameWrapper]}>
        {Array.isArray(imageTextVintageDesMob)
          ? imageTextVintageDesMob.map((item) => (
              <li
                key={item.id}
                className={styles[item.classNameTextContainer ?? '']}
              >
                <ImageTextDesMob {...item} />
              </li>
            ))
          : null}
      </ul>
    </>
  );
};

export default ImageTextDesMobWrapper;
