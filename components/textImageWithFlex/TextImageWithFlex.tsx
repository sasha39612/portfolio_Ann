import cn from 'classnames';
import he from 'he';
import { TextImageWithFlexType } from '../../interfaces/common';
import ImageComponent from '../ui/image/Image';
import TextBlockListFlex from '../ui/textBlockListFlex/TextBlockListFlex';
import styles from './textImageWithFlex.module.scss';

const TextImageWithFlex = (props: TextImageWithFlexType) => {
  const { textPart, imagePart, className, classNameContainer } = props;
  const imageStyles = cn(styles.image, styles[imagePart?.className ?? '']);

  const getDangerousHTML = (text: string) => {
    return {
      __html: he.decode(text),
    };
  };

  return (
    <article className={styles[className ?? '']}>
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
        <TextBlockListFlex
          textGrid={textPart?.textGrid ?? []}
          className={textPart?.classNameGridContainer}
          classNameContainer={textPart?.classNameTextPartGridContainer}
        />
        {/* <ul className={styles[textPart?.classNameTextPartGridContainer ?? '']}>
          {Array.isArray(textPart?.textGrid)
            ? textPart.textGrid.map((textBlock: TextSimpleBlock) => (
                <li
                  key={textBlock.id}
                  className={styles[textPart?.classNameGridContainer ?? '']}
                >
                  <div className={styles?.[textBlock?.classNameTitle ?? '']}>
                    {textBlock.title}
                  </div>
                  <div
                    className={styles?.[textBlock?.classNameDescription ?? '']}
                  >
                    {textBlock.description}
                  </div>
                </li>
              ))
            : null}
        </ul> */}
      </div>
      <ImageComponent
        src={imagePart?.src ?? ''}
        alt={imagePart?.alt ?? 'Some image'}
        priority={imagePart?.priority}
        loading={imagePart?.loading}
        className={imageStyles}
      />
    </article>
  );
};

export default TextImageWithFlex;
