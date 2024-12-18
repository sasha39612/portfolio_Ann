'use client';
import useCheckMobileScreen from '../../../lib/hooks/useCheckMobileScreen';
import Text from '../../ui/text/Text';
import { ImageTextSaving } from '../type';
import styles from './imageTextSaving_6.module.scss';
import ImageComponent from '../../ui/image/Image';

const ImageTextSaving_6 = ({
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
        />
      </div>
      <div className={styles.imageTextSaving_4TextImageWrapper}>
        <Text
          id={textPart.id}
          description={textPart.description}
          classNameDescription={styles[textPart.classNameDescription ?? '']}
        />

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
                className={styles[imagePartDesktop?.className ?? '']}
              />
            )}
          </>
        ) : null}
      </div>
    </>
  );
};

export default ImageTextSaving_6;
