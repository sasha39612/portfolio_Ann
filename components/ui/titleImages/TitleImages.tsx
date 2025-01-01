'use client';
import Text from '../text/Text';
import ImageComponent from '../image/Image';
import { ImageText } from '../../../interfaces/common';
import styles from './titleImages.module.scss';

const TitleImages = ({
  textPart,
  imagePartDesktopSlider,
  className,
  classNameImageContainer,
  classNameSwiperWrapper,
}: ImageText) => {
  return (
    <section className={styles[className ?? '']}>
      <div className={styles[classNameImageContainer ?? '']}>
        <Text
          id={textPart.id}
          title={textPart?.title}
          description={textPart?.description}
          classNameTitle={styles[textPart.classNameTitle ?? '']}
          classNameDescription={styles[textPart.classNameDescription ?? '']}
        />
      </div>
      {imagePartDesktopSlider?.length ? (
        <ul className={styles[classNameSwiperWrapper ?? '']}>
          {imagePartDesktopSlider.map((item) => (
            <li key={item.id}>
              {item?.src ? (
                <ImageComponent
                  {...item}
                  className={styles[item.className ?? '']}
                />
              ) : null}
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
};

export default TitleImages;
