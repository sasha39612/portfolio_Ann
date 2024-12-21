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
}: ImageText) => {
  const isMobileView = useCheckMobileScreen();

  return (
    <>
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
        <>
          {isMobileView ? (
            <ImageComponent
              {...imagePartMobile}
              className={styles[imagePartMobile?.className ?? '']}
            />
          ) : (
            <ImageComponent
              {...imagePartDesktop}
              className={styles[imagePartDesktop.className ?? '']}
            />
          )}
        </>
      ) : null}
    </>
  );
};

export default ImageTextSimple;
