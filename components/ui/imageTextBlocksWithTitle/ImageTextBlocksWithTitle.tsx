'use client';
import Text from '../text/Text';
import { ImageTextSimpleBlock } from '../../../interfaces/common';
import ImageComponent from '../image/Image';
import styles from './imageTextBlocksWithTitle.module.scss';

const ImageTextBlocksWithTitle = ({
  imageTextWithTitle,
}: {
  imageTextWithTitle: ImageTextSimpleBlock[];
}) => {
  return (
    <ul className={styles[imageTextWithTitle[0]?.className ?? '']}>
      {Array.isArray(imageTextWithTitle)
        ? imageTextWithTitle.map((item) => (
            <li key={item.id} className={styles[item.classNameContainer ?? '']}>
              <Text
                {...item}
                classNameTitle={styles[item.classNameTitle ?? '']}
                classNameDescription={styles[item.classNameDescription ?? '']}
              />
              <ImageComponent
                {...item.image}
                className={styles[item.image.className ?? '']}
              />
            </li>
          ))
        : null}
    </ul>
  );
};

export default ImageTextBlocksWithTitle;
