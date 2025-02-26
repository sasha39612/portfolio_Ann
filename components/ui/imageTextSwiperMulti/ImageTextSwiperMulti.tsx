'use client';
import useCheckMobileScreen from '../../../lib/hooks/useCheckMobileScreen';
import Text from '../text/Text';
import SwiperCustom from '../swiper/Swiper';
import ImageComponent from '../image/Image';
import { ImageText } from '../../../interfaces/common';
import DesktopMulti from '../desktopMulti/DesktopMulti';
import styles from './imageTextSwiperMulti.module.scss';

const getSlidesPerView = (className?: string) => {
  switch (className) {
    case 'imageTextRecipeMobile':
      return 1.5;
    case 'imageTextLiteraryMobile_4':
    case 'imageTextLiteraryMobile_5':
      return 1.8;
    default:
      return 2.5;
  }
};

const ImageTextSwiperMulti = ({
  textPart,
  imagePartDesktop,
  imagePartMobileSliders,
  imagePartDesktopSliders,
  className,
  classNameImageContainer,
  classNameSwiperWrapper,
}: ImageText) => {
  const isMobileView = useCheckMobileScreen();

  return (
    <div className={styles[className ?? '']}>
      <div className={styles[classNameImageContainer ?? '']}>
        <Text
          id={textPart.id}
          title={textPart?.title}
          description={textPart?.description}
          classNameTitle={styles[textPart.classNameTitle ?? '']}
          classNameDescription={styles[textPart.classNameDescription ?? '']}
        />
      </div>
      {imagePartDesktop?.src || imagePartDesktopSliders?.length ? (
        <div className={styles[classNameImageContainer ?? '']}>
          {isMobileView ? (
            <ul className={styles[classNameSwiperWrapper ?? '']}>
              {Array.isArray(imagePartMobileSliders)
                ? imagePartMobileSliders.map((item) => (
                    <li key={item.id}>
                      {item?.image?.src ? (
                        <ImageComponent
                          {...item.image}
                          className={styles[item.image?.className ?? '']}
                        />
                      ) : null}
                      <h3 className={styles[item.subTitle?.className ?? '']}>
                        {item.subTitle?.text}
                      </h3>
                      <SwiperCustom
                        images={item.imagePartMobileSlider}
                        classNameSwiper={styles.swiper}
                        slidesPerView={getSlidesPerView(
                          item.imagePartMobileSlider?.[0].className,
                        )}
                        classNameImage={
                          styles[
                            item.imagePartMobileSlider?.[0].className ?? ' '
                          ]
                        }
                      />
                    </li>
                  ))
                : null}
            </ul>
          ) : (
            <>
              {Array.isArray(imagePartDesktopSliders) ? (
                <DesktopMulti
                  imagePartDesktopSliders={imagePartDesktopSliders}
                  className={styles[classNameSwiperWrapper ?? '']}
                />
              ) : imagePartDesktop?.src ? (
                <ImageComponent
                  {...imagePartDesktop}
                  className={styles[imagePartDesktop?.className ?? '']}
                />
              ) : null}
            </>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default ImageTextSwiperMulti;
