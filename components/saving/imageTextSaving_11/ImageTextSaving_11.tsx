'use client';
import { ImageText } from '../../../interfaces/common';
import ImageComponent from '../../ui/image/Image';
import Text from '../../ui/text/Text';
import styles from './imageTextSaving_11.module.scss';

const ImageTextSaving_11 = ({ textPart, imagePartDesktop }: ImageText) => {
  return (
    <>
      <div className={styles.containerImageTextSaving_1}>
        <Text
          id={textPart.id}
          title={textPart.title}
          classNameTitle={styles[textPart.classNameTitle ?? '']}
        />
      </div>
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

export default ImageTextSaving_11;
