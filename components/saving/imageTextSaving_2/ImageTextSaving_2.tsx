'use client';
import useCheckMobileScreen from '../../../lib/hooks/useCheckMobileScreen';
import Text from '../../ui/text/Text';
import { ImageTextSaving } from '../type';
import styles from './imageTextSaving_2.module.scss';
import ImageComponent from '../../ui/image/Image';
import SwiperCustom from '../../ui/swiper/Swiper';

const ImageTextSaving_2 = ({
  textPart,
  imagePartDesktop,
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
          description={textPart.description}
          classNameDescription={styles[textPart.classNameDescription ?? '']}
        />
      </div>
      {imagePartDesktop?.src && imagePartMobileSlider?.length ? (
        <>
          {isMobileView ? (
            <SwiperCustom
              images={imagePartMobileSlider}
              classNameSwiper={styles.swiper}
              classNameImage={
                styles[imagePartMobileSlider?.[0].className ?? ' ']
              }
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

export default ImageTextSaving_2;
