import cn from 'classnames';
import he from 'he';
import { TextImageWithFlexType } from '../../interfaces/common';
import ImageComponent from '../ui/image/Image';
import TextBlockListFlex from '../ui/textBlockListFlex/TextBlockListFlex';
import styles from './textImageWithFlex.module.scss';
import useCheckMobileScreen from '../../lib/hooks/useCheckMobileScreen';

const isFirstTextBlockListFlexVisible = (
  isMobileView: boolean,
  className?: string,
) => !(className === 'classNameGridContainerRecipe' && isMobileView);

const isSecondTextBlockListFlexVisible = (
  isMobileView: boolean,
  className?: string,
) => className === 'classNameGridContainerRecipe' && isMobileView;

const TextImageWithFlex = (props: TextImageWithFlexType) => {
  const { textPart, imagePart, className, classNameContainer } = props;
  const isMobileView = useCheckMobileScreen();
  const imageStyles = cn(styles.image, styles[imagePart?.className ?? '']);

  const getDangerousHTML = (text: string) => {
    return {
      __html: he.decode(text),
    };
  };

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
        {textPart?.subTitle?.isDangerousHTML ? (
          <div
            className={styles[textPart?.subTitle?.className ?? '']}
            dangerouslySetInnerHTML={getDangerousHTML(
              textPart?.title?.text ?? '',
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
        {isFirstTextBlockListFlexVisible(
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
          className={imageStyles}
        />
      ) : null}
      {isSecondTextBlockListFlexVisible(
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
