'use client';
import { ImageTextSaving } from '../type';
import ImageComponent from '../../ui/image/Image';
import Text from '../../ui/text/Text';
import styles from './imageTextSaving_12.module.scss';

const ImageTextSaving_12 = ({
  textPart,
  imagePartDesktop,
}: ImageTextSaving) => {
  return (
    <>
      <div className={styles.imageTextSaving_4TextImageWrapper}>
        <Text
          id={textPart.id}
          description={textPart.description}
          classNameDescription={styles[textPart.classNameDescription ?? '']}
        />

        {imagePartDesktop?.src ? (
          <>
            <ImageComponent
              {...imagePartDesktop}
              className={styles[imagePartDesktop?.className ?? '']}
            />
          </>
        ) : null}
      </div>
    </>
  );
};

export default ImageTextSaving_12;
