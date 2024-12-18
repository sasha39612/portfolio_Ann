'use client';
import useCheckMobileScreen from '../../../lib/hooks/useCheckMobileScreen';
import Text from '../../ui/text/Text';
import { ImageTextSaving } from '../type';
import styles from './imageTextSaving_3.module.scss';
import ImageComponent from '../../ui/image/Image';

const ImageTextSaving_3 = ({
  textPart,
  imagePartDesktopSlider,
  imagePartMobileSlider,
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
      {imagePartDesktopSlider?.length && imagePartMobileSlider?.length ? (
        <>
          {isMobileView ? (
            <ImageComponent
              {...imagePartMobileSlider[0]}
              className={styles[imagePartMobileSlider[0]?.className ?? '']}
            />
          ) : (
            <ImageComponent
              {...imagePartDesktopSlider[0]}
              className={styles[imagePartDesktopSlider[0].className ?? '']}
            />
          )}
        </>
      ) : null}
      {imagePartDesktopSlider?.length && imagePartMobileSlider?.length ? (
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
                {...imagePartMobileSlider[1]}
                className={styles[imagePartMobileSlider[1]?.className ?? '']}
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
