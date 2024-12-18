import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import cn from 'classnames';
import { ImagePropsType } from '../../../interfaces/common';
import ImageComponent from '../image/Image';
import 'swiper/swiper-bundle.css';
import styles from './swiper.module.scss';

export interface SwiperType {
  images: ImagePropsType[];
  classNameSwiper?: string;
  classNameImage?: string;
}

const SwiperCustom = ({
  images,
  classNameSwiper,
  classNameImage,
}: SwiperType) => {
  const swiperStyles = cn(styles.mySwiper, classNameSwiper);

  return (
    <Swiper
      pagination={{ clickable: true }}
      spaceBetween={8}
      slidesPerView={2.5}
      modules={[Pagination]}
      className={swiperStyles}
    >
      {images.map((image) => (
        <SwiperSlide key={image.id}>
          <ImageComponent {...image} className={classNameImage} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperCustom;
