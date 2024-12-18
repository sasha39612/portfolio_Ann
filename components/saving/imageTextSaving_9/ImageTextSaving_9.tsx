'use client';
import useCheckMobileScreen from '../../../lib/hooks/useCheckMobileScreen';
import Text from '../../ui/text/Text';
import { ImageTextSaving } from '../type';
import styles from './imageTextSaving_9.module.scss';
import ImageComponent from '../../ui/image/Image';
import SwiperCustom from '../../ui/swiper/Swiper';

const slidesPerView = 2.5;

const ImageTextSaving_9 = ({
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
        />
      </div>
      {imagePartDesktop?.src && imagePartMobileSlider?.length ? (
        <>
          {isMobileView ? (
            <div className={styles.swiperWrapper}>
              <SwiperCustom
                images={imagePartMobileSlider}
                classNameSwiper={styles.swiper}
                slidesPerView={slidesPerView}
                classNameImage={
                  styles[imagePartMobileSlider?.[0].className ?? ' ']
                }
              />
            </div>
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

export default ImageTextSaving_9;
