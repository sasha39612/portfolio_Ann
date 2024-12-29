'use client';
import useCheckMobileScreen from '../../../lib/hooks/useCheckMobileScreen';
import Text from '../text/Text';
import ImageComponent from '../image/Image';
import { ImageTextDesMobType } from '../../../interfaces/common';
import styles from './imageTextDesMob.module.scss';

const ImageTextDesMob = ({
  textPart,
  imagePartDesktop,
  imagePartMobile,
  className,
  classNameTextContainer,
}: ImageTextDesMobType) => {
  const isMobileView = useCheckMobileScreen();

  return (
    <>
      <div className={styles[className ?? '']}>
        <div className={styles[classNameTextContainer ?? '']}>
          <Text
            {...textPart}
            classNameTitle={styles[textPart?.classNameTitle ?? '']}
            classNameSubTitle={styles[textPart?.classNameSubTitle ?? '']}
            classNameDescription={styles[textPart?.classNameDescription ?? '']}
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
                className={styles[imagePartDesktop?.className ?? '']}
              />
            )}
          </>
        ) : null}
      </div>
    </>
  );
};

export default ImageTextDesMob;
