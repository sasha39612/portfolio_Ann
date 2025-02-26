'use client';
import useCheckMobileScreen from '../../../lib/hooks/useCheckMobileScreen';
import Text from '../../ui/text/Text';
import { ImageText } from '../../../interfaces/common';
import styles from './imageTextSaving_3.module.scss';
import ImageComponent from '../../ui/image/Image';

const ImageTextSaving_3 = ({
  textPart,
  imagePartDesktopSlider,
  imagePartMobileSliders,
}: ImageText) => {
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
      {imagePartDesktopSlider?.length &&
      imagePartMobileSliders?.imagePartMobileSlider?.length ? (
        <>
          {isMobileView ? (
            <ImageComponent
              {...imagePartMobileSliders?.imagePartMobileSlider[0]}
              className={
                styles[
                  imagePartMobileSliders?.imagePartMobileSlider[0]?.className ??
                    ''
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
        <div className={styles.imageTextSaving_3TextImageWrapper}>
          <div className={styles.containerImageTextSaving_1}>
            <Text
              id={textPart.id}
              description={textPart.description}
              classNameDescription={styles[textPart.classNameDescription ?? '']}
            />
          </div>
          {isMobileView ? (
            <>
              <ImageComponent
                {...imagePartMobileSliders?.imagePartMobileSlider[1]}
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
        </div>
      ) : null}
    </>
  );
};

export default ImageTextSaving_3;
