'use client';
import cn from 'classnames';
import { TitleImagesTextType } from '../../../interfaces/common';
import useCheckMobileScreen from '../../../lib/hooks/useCheckMobileScreen';
import ImageComponent from '../../ui/image/Image';
import Text from '../../ui/text/Text';
import { MouseEvent, useState } from 'react';
import ImageComponentPopup from '../../ui/imageContentPopup/ImageContentPopup';
import styles from './titleImagesText.module.scss';

const getTextLeftStyles = (textStyles: string, isTextVisible?: boolean) => {
  return cn(isTextVisible ? styles[textStyles ?? ''] : styles.unVisibleText);
};

const getTextRightStyles = (textStyles: string, isTextVisible?: boolean) => {
  return cn(isTextVisible ? styles[textStyles ?? ''] : styles.unVisibleText);
};

const TitleImagesText = ({
  textPart,
  imagePartDesktop,
  imagesTextPart,
  classNameImagesTextWrapper,
}: TitleImagesTextType) => {
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
      <Text
        title={textPart.title?.text}
        description={!isMobile ? textPart.description?.text : ''}
        classNameTitle={styles[textPart.title?.className ?? '']}
        classNameDescription={
          !isMobile ? styles[textPart.description?.className ?? ''] : ''
        }
      />
      {isMobile ? (
        <>
          {Array.isArray(imagesTextPart) ? (
            <ul className={styles[classNameImagesTextWrapper ?? '']}>
              {imagesTextPart.map((item) => (
                <li
                  key={item.id}
                  className={styles[item?.classNameContainer ?? '']}
                >
                  <>
                    <span
                      onClick={(e) => handleOnClick(e, item.popupContent)}
                      className={getTextLeftStyles(
                        item?.classNameText,
                        item.isTextLeftSide,
                      )}
                    >
                      {item?.text}
                    </span>
                    {item.image?.src ? (
                      <ImageComponent
                        {...item.image}
                        className={styles[item.image.className ?? '']}
                      />
                    ) : null}
                    <span
                      onClick={(e) => handleOnClick(e, item.popupContent)}
                      className={getTextRightStyles(
                        item?.classNameText,
                        item.isTextRightSide,
                      )}
                    >
                      {item?.text}
                    </span>
                  </>
                </li>
              ))}
            </ul>
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

export default TitleImagesText;
