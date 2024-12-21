'use client';
import useCheckMobileScreen from '../../../lib/hooks/useCheckMobileScreen';
import Text from '../../ui/text/Text';
import ImageComponent from '../../ui/image/Image';
import SwiperCustom from '../../ui/swiper/Swiper';
import { ImageText } from '../../../interfaces/common';
import styles from './imageTextSwiperDouble.module.scss';

const slidesPerView = 2.5;

const ImageTextSwiperDouble = ({
  textPart,
  imagePartDesktop,
  imagePartMobileSliders,
  className,
  classNameImageContainer,
  classNameSwiperWrapper,
}: ImageText) => {
  const isMobileView = useCheckMobileScreen();

  return (
    <div className={styles[className ?? '']}>
      <div className={styles.containerImageTextSaving_1}>
        <Text
          id={textPart.id}
          title={textPart.title}
          classNameTitle={styles[textPart.classNameTitle ?? '']}
        />
      </div>
      {imagePartDesktop?.src && imagePartMobileSliders?.length ? (
        <div className={styles[classNameImageContainer ?? '']}>
          {isMobileView ? (
            <ul className={styles[classNameSwiperWrapper ?? '']}>
              {Array.isArray(imagePartMobileSliders)
                ? imagePartMobileSliders.map((slider) => (
                    <li key={slider.id}>
                      <SwiperCustom
                        images={slider.imagePartMobileSlider}
                        classNameSwiper={styles.swiper}
                        slidesPerView={slidesPerView}
                        classNameImage={
                          styles[
                            slider.imagePartMobileSlider?.[0].className ?? ' '
                          ]
                        }
                      />
                    </li>
                  ))
                : null}
            </ul>
          ) : (
            <ImageComponent
              {...imagePartDesktop}
              className={styles[imagePartDesktop.className ?? '']}
            />
          )}
        </div>
      ) : null}
    </div>
  );
};

export default ImageTextSwiperDouble;
