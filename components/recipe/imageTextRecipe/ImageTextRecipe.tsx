'use client';
import useCheckMobileScreen from '../../../lib/hooks/useCheckMobileScreen';
import { ImageText } from '../../../interfaces/common';
import ImageComponent from '../../ui/image/Image';
import SwiperCustom from '../../ui/swiper/Swiper';
import styles from './imageTextRecipe.module.scss';

const slidesPerView = 2.5;

const ImageTextRecipe = ({
  textPart,
  imagePartDesktop,
  imagePartMobileSliders,
  className,
  classNameImageContainer,
}: ImageText) => {
  const isMobileView = useCheckMobileScreen();

  return (
    <section className={styles[className ?? '']}>
      <div className={styles[classNameImageContainer ?? '']}>
        <h4 className={styles[textPart?.classNameTitle ?? '']}>
          {textPart?.title}
        </h4>
        <p className={styles[textPart?.classNameDescription ?? '']}>
          {textPart.description}
        </p>
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
                classNameSwiperSlider={styles.swiperSlide}
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
    </section>
  );
};

export default ImageTextRecipe;
