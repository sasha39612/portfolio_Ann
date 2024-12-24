'use client';
import useCheckMobileScreen from '../../../lib/hooks/useCheckMobileScreen';
import { ImageText } from '../../../interfaces/common';
import styles from './imageTextSaving_8.module.scss';
import ImageComponent from '../../ui/image/Image';

const ImageTextSaving_8 = ({
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

export default ImageTextSaving_8;
