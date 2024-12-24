'use client';
import useCheckMobileScreen from '../../../lib/hooks/useCheckMobileScreen';
import Text from '../../ui/text/Text';
import { ImageText } from '../../../interfaces/common';
import styles from './imageTextSaving_9.module.scss';
import ImageComponent from '../../ui/image/Image';
import SwiperCustom from '../../ui/swiper/Swiper';

const slidesPerView = 2.5;

const ImageTextSaving_9 = ({
  textPart,
  imagePartDesktop,
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
      {imagePartDesktop?.src &&
      imagePartMobileSliders?.imagePartMobileSlider?.length ? (
        <>
          {isMobileView ? (
            <div className={styles.swiperWrapper}>
              <SwiperCustom
                images={imagePartMobileSliders?.imagePartMobileSlider ?? []}
                classNameSwiper={styles.swiper}
                slidesPerView={slidesPerView}
                classNameImage={
                  styles[
                    imagePartMobileSliders?.imagePartMobileSlider?.[0]
                      .className ?? ' '
                  ]
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
