'use client';
import { MouseEvent, useState } from 'react';
import { ImagesTextType } from '../../../interfaces/common';
import useCheckMobileScreen from '../../../lib/hooks/useCheckMobileScreen';
import ImageComponent from '../../ui/image/Image';
import ImageComponentPopup from '../../ui/imageContentPopup/ImageContentPopup';
import styles from './imagesText.module.scss';

const ImagesText = ({
  imagePartDesktop,
  imagePartMobile,
  imagesTextPart,
  classNameImagesTextWrapper,
}: ImagesTextType) => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupContentSaved, setPopupContentSaved] = useState<string>('content');
  const isMobile = useCheckMobileScreen();

  const handleClosePopup = () => setPopupVisible(false);

  const handleOnClick = (e: MouseEvent<HTMLSpanElement>, content?: string) => {
    e.preventDefault();
    setPopupVisible(true);
    setPopupContentSaved(content ?? 'content');
  };

  return (
    <section className={styles.wrapper}>
      {isMobile ? (
        <>
          {Array.isArray(imagesTextPart) ? (
            <div className={styles.mobileContainer}>
              {imagePartMobile?.src ? (
                <ImageComponent
                  {...imagePartMobile}
                  className={styles[imagePartMobile.className ?? '']}
                />
              ) : null}
              <ul className={styles[classNameImagesTextWrapper ?? '']}>
                {imagesTextPart.map((item) => (
                  <li
                    key={item.id}
                    className={styles[item?.classNameContainer ?? '']}
                  >
                    <>
                      {item.image?.src ? (
                        <ImageComponent
                          {...item.image}
                          className={styles[item.image.className ?? '']}
                        />
                      ) : null}
                      <span
                        onClick={(e) => handleOnClick(e, item.popupContent)}
                        className={styles[item?.classNameText ?? '']}
                      >
                        {item?.text}
                      </span>
                    </>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </>
      ) : (
        <>
          {imagePartDesktop?.src ? (
            <ImageComponent
              {...imagePartDesktop}
              className={styles[imagePartDesktop.className ?? '']}
            />
          ) : null}
        </>
      )}
      {popupVisible ? (
        <ImageComponentPopup
          handleClosePopup={handleClosePopup}
          content={popupContentSaved}
        />
      ) : null}
    </section>
  );
};

export default ImagesText;
