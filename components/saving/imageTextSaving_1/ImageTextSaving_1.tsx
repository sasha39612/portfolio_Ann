'use client';
import useCheckMobileScreen from '../../../lib/hooks/useCheckMobileScreen';
import Text from '../../ui/text/Text';
import { ImageTextSaving } from '../type';
import styles from './imageTextSaving_1.module.scss';
import ImageComponent from '../../ui/image/Image';

const ImageTextSaving_1 = ({
  textPart,
  imagePartDesktop,
  imagePartMobile,
}: ImageTextSaving) => {
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

export default ImageTextSaving_1;
