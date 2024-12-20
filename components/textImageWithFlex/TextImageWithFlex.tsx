import cn from 'classnames';
import {
  TextImageWithFlexType,
  TextSimpleBlock,
} from '../../interfaces/common';
import ImageComponent from '../ui/image/Image';
import styles from './textImageWithFlex.module.scss';

const TextImageWithFlex = (props: TextImageWithFlexType) => {
  const { textPart, imagePart, className, classNameContainer } = props;
  const imageStyles = cn(styles.image, styles[imagePart?.className ?? '']);

  return (
    <article className={styles[className ?? '']}>
      <div className={styles[classNameContainer ?? '']}>
        <div className={styles[textPart?.title?.className ?? '']}>
          {textPart?.title?.text}
        </div>
        <div className={styles[textPart?.description?.className ?? '']}>
          {textPart?.description?.text}
        </div>
        <ul className={styles[textPart?.classNameTextPartGridContainer ?? '']}>
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
        </ul>
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
