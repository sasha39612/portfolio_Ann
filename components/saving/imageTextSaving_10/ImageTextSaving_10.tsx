'use client';
import useCheckMobileScreen from '../../../lib/hooks/useCheckMobileScreen';
import { ImageTextSaving } from '../type';
import styles from './imageTextSaving_10.module.scss';
import SwiperCustom from '../../ui/swiper/Swiper';

const slidesPerView = 2.5;

const ImageTextSaving_10 = ({ imagePartMobileSlider }: ImageTextSaving) => {
  const isMobileView = useCheckMobileScreen();

  return (
    <>
      {imagePartMobileSlider?.length ? (
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
          ) : null}
        </>
      ) : null}
    </>
  );
};

export default ImageTextSaving_10;
