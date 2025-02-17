import Link from 'next/link';
import { TextImageType } from '../../interfaces/common';
import ImageComponent from '../ui/image/Image';
import TextPart from '../ui/textPart/TextPart';
import cn from 'classnames';
import styles from './textImage.module.scss';

const TextImage = (props: TextImageType) => {
  const {
    textPart,
    imagePart,
    isProject,
    isReverse,
    projectName,
    container,
    backgroundImage,
    backgroundColor,
    className = ' ',
  } = props;

  const wrapperStyles = cn(
    styles.wrapper,
    isProject
      ? isReverse
        ? styles.wrapperProjectReverse
        : styles.wrapperProject
      : '',
    className,
  );
  const projectNameStyles = cn(
    isReverse ? styles.projectNameStylesReverse : styles.projectNameStyles,
    className,
  );
  const containerStyles = cn(
    styles.container,
    isReverse ? styles.containerProjectReverse : '',
    styles[container?.className ?? ''],
    className,
  );
  const textPartContainerStyles = cn(
    isProject ? styles.textPartContainerProject : styles.textPartContainer,
    className,
  );
  const buttonStyles = cn(
    textPart?.button?.className ? `${styles[textPart.button.className]}` : '',
    className,
  );
  const imageStyles = cn(
    styles.mainImage,
    imagePart?.imageClassName ? `${styles[imagePart.imageClassName]}` : '',
    className,
  );

  return (
    <section className={wrapperStyles}>
      {backgroundImage?.src ? (
        <ImageComponent
          src={backgroundImage.src}
          alt={backgroundImage.alt || 'Background'}
          priority={backgroundImage.priority}
          loading={backgroundImage.loading}
          className={styles[backgroundImage?.imageClassName ?? '']}
        />
      ) : null}
      {backgroundColor ? (
        <div className={styles[backgroundColor ?? '']} />
      ) : null}
      <div className={projectNameStyles}>{projectName}</div>
      <div className={containerStyles}>
        <div className={textPartContainerStyles}>
          <TextPart {...textPart} />
          {textPart?.button?.text ? (
            <Link
              href={textPart?.link?.href ?? '/'}
              className={buttonStyles}
              aria-label="Link to project"
              prefetch={false}
            >
              {textPart.button.text}
            </Link>
          ) : null}
        </div>
        <ImageComponent
          src={imagePart?.src ?? ''}
          alt={imagePart?.alt ?? 'Some image'}
          priority={imagePart?.priority}
          loading={imagePart?.loading}
          className={imageStyles}
        />
      </div>
    </section>
  );
};

export default TextImage;
