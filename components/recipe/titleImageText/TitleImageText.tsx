import cn from 'classnames';
import { TextImageWithFlexType } from '../../../interfaces/common';
import ImageComponent from '../../ui/image/Image';
import { getDangerousHTML } from '../../../lib/getDangerousHTML';
import styles from './titleImageText.module.scss';

const TitleImageText = (props: TextImageWithFlexType) => {
  const {
    textPart,
    imagePart,
    className,
    classNameContainer,
    classNameContainerTextPart,
  } = props;
  const imageStyles = cn(styles.image, styles[imagePart?.className ?? '']);

  return (
    <section className={styles[className ?? '']}>
      <h3 className={styles[textPart?.subTitle?.className ?? '']}>
        {textPart?.subTitle?.text}
      </h3>
      <div className={styles[classNameContainer ?? '']}>
        <div className={styles[classNameContainerTextPart ?? '']}>
          <div
            className={styles[textPart?.title?.className ?? '']}
            dangerouslySetInnerHTML={getDangerousHTML(
              textPart?.title?.text ?? '',
            )}
          />
          <div className={styles[textPart?.description?.className ?? '']}>
            {textPart?.description?.text}
          </div>
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
      </div>
    </section>
  );
};

export default TitleImageText;
