'use client';
import { TextImageWithFlexType } from '../../interfaces/common';
import ImageComponent from '../ui/image/Image';
import TextBlockListFlex from '../ui/textBlockListFlex/TextBlockListFlex';
import styles from './textImageWithFlex.module.scss';
import useCheckMobileScreen from '../../lib/hooks/useCheckMobileScreen';
import { getDangerousHTML } from '../../lib/getDangerousHTML';

const isTextBlockListFlexVisible = (
  isMobileView: boolean,
  className?: string,
) =>
  !(
    (className === 'classNameGridContainerRecipe' ||
      className === 'classNameGridContainerLiterary') &&
    isMobileView
  );

const TextImageWithFlex = (props: TextImageWithFlexType) => {
  const { textPart, imagePart, className, classNameContainer } = props;
  const isMobileView = useCheckMobileScreen();

  return (
    <section className={styles[className ?? '']}>
      <div className={styles[classNameContainer ?? '']}>
        {textPart?.title?.isDangerousHTML ? (
          <div
            className={styles[textPart?.title?.className ?? '']}
            dangerouslySetInnerHTML={getDangerousHTML(
              textPart?.title?.text ?? '',
            )}
          />
        ) : textPart?.title?.text ? (
          <div className={styles[textPart?.title?.className ?? '']}>
            {textPart?.title?.text}
          </div>
        ) : null}
        {textPart?.image?.src ? (
          <ImageComponent
            src={textPart.image.src}
            alt={textPart.image.alt ?? 'Some image'}
            priority={textPart.image.priority}
            loading={textPart.image.loading}
            className={styles[textPart?.image?.className ?? '']}
          />
        ) : null}
        {textPart?.subTitle?.isDangerousHTML ? (
          <div
            className={styles[textPart?.subTitle?.className ?? '']}
            dangerouslySetInnerHTML={getDangerousHTML(
              textPart?.subTitle?.text ?? '',
            )}
          />
        ) : textPart?.subTitle?.text ? (
          <div className={styles[textPart?.subTitle?.className ?? '']}>
            {textPart?.subTitle?.text}
          </div>
        ) : null}
        {textPart?.description?.isDangerousHTML ? (
          <div
            className={styles[textPart?.description?.className ?? '']}
            dangerouslySetInnerHTML={getDangerousHTML(
              textPart?.description?.text ?? '',
            )}
          />
        ) : (
          <div className={styles[textPart?.description?.className ?? '']}>
            {textPart?.description?.text}
          </div>
        )}
        {isTextBlockListFlexVisible(
          isMobileView,
          textPart?.classNameGridContainer,
        ) ? (
          <TextBlockListFlex
            textGrid={textPart?.textGrid ?? []}
            className={textPart?.classNameGridContainer}
            classNameContainer={textPart?.classNameTextPartGridContainer}
          />
        ) : null}
      </div>
      {imagePart?.src ? (
        <ImageComponent
          src={imagePart?.src}
          alt={imagePart?.alt ?? 'Some image'}
          priority={imagePart?.priority}
          loading={imagePart?.loading}
          className={styles[imagePart?.className ?? '']}
        />
      ) : null}
      {!isTextBlockListFlexVisible(
        isMobileView,
        textPart?.classNameGridContainer,
      ) ? (
        <TextBlockListFlex
          textGrid={textPart?.textGrid ?? []}
          className={textPart?.classNameGridContainer}
          classNameContainer={textPart?.classNameTextPartGridContainer}
        />
      ) : null}
    </section>
  );
};

export default TextImageWithFlex;
