'use client';
import useCheckMobileScreen from '../../../lib/hooks/useCheckMobileScreen';
import Text from '../text/Text';
import ImageComponent from '../image/Image';
import { ImageText } from '../../../interfaces/common';
import styles from './imageTextSimple.module.scss';

const ImageTextSimple = ({
  textPart,
  imagePartDesktop,
  imagePartMobile,
  classNameImageContainer,
}: ImageText) => {
  const isMobileView = useCheckMobileScreen();

  return (
    <section>
      <div className={styles.containerImageTextSaving_1}>
        <Text
          id={textPart.id}
          title={textPart.title}
          classNameTitle={styles[textPart.classNameTitle ?? '']}
          description={textPart.description}
          classNameDescription={styles[textPart.classNameDescription ?? '']}
        />
      </div>
      {imagePartDesktop?.src && imagePartMobile?.src ? (
        <div className={styles.container}>
          {isMobileView ? (
            <div className={styles[classNameImageContainer ?? '']}>
              <ImageComponent
                {...imagePartMobile}
                className={styles[imagePartMobile?.className ?? '']}
              />
            </div>
          ) : (
            <ImageComponent
              {...imagePartDesktop}
              className={styles[imagePartDesktop.className ?? '']}
            />
          )}
        </div>
      ) : null}
    </section>
  );
};

export default ImageTextSimple;
