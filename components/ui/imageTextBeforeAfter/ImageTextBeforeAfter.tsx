'use client';
import useCheckMobileScreen from '../../../lib/hooks/useCheckMobileScreen';
import { ImageText } from '../../../interfaces/common';
import ImageComponent from '../image/Image';
import styles from './imageTextBefaoreAfter.module.scss';

const ImageTextBeforeAfter = ({
  imagePartDesktopSlider,
  imagePartMobileSliders,
}: ImageText) => {
  const isMobileView = useCheckMobileScreen();

  return (
    <>
      <div className={styles.imageContainer}>
        {imagePartDesktopSlider?.length &&
        imagePartMobileSliders?.imagePartMobileSlider?.length ? (
          <>
            {isMobileView ? (
              <ImageComponent
                {...imagePartMobileSliders?.imagePartMobileSlider[0]}
                className={
                  styles[
                    imagePartMobileSliders?.imagePartMobileSlider[0]
                      ?.className ?? ''
                  ]
                }
              />
            ) : (
              <ImageComponent
                {...imagePartDesktopSlider[0]}
                className={styles[imagePartDesktopSlider[0].className ?? '']}
              />
            )}
          </>
        ) : null}
        {imagePartDesktopSlider?.length &&
        imagePartMobileSliders?.imagePartMobileSlider?.length ? (
          <>
            {isMobileView ? (
              <>
                <ImageComponent
                  {...(imagePartMobileSliders.imagePartMobileSlider[1] ?? '')}
                  className={
                    styles[
                      imagePartMobileSliders?.imagePartMobileSlider[1]
                        ?.className ?? ''
                    ]
                  }
                />
              </>
            ) : (
              <ImageComponent
                {...imagePartDesktopSlider[1]}
                className={styles[imagePartDesktopSlider[1].className ?? '']}
              />
            )}
          </>
        ) : null}
      </div>
    </>
  );
};

export default ImageTextBeforeAfter;
