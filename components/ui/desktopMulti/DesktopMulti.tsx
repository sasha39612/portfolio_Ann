'use client';
import ImageComponent from '../image/Image';
import { DesktopMultiType } from '../../../interfaces/common';
import styles from './desktopMulti.module.scss';

const DesktopMulti = ({
  imagePartDesktopSliders,
  className,
}: DesktopMultiType) => {
  return (
    <ul className={styles[className ?? '']}>
      {imagePartDesktopSliders.map((item) => (
        <li key={item.id}>
          <h3 className={styles[item.subTitle?.className ?? '']}>
            {item.subTitle?.text}
          </h3>
          <div className={styles[item?.className ?? '']}>
            {Array.isArray(item?.imagePartDesktopSlider)
              ? item.imagePartDesktopSlider.map((image) => (
                  <div key={image.id} className={styles[image.className ?? '']}>
                    <ImageComponent
                      {...image}
                      className={styles[image.className ?? '']}
                    />
                  </div>
                ))
              : null}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default DesktopMulti;
