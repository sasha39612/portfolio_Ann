import Link from 'next/link';
import { TextImageType } from '../../interfaces/common';
import ButtonComponent from '../ui/button/button';
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
    <article className={wrapperStyles}>
      <div className={projectNameStyles}>{projectName}</div>
      <div className={containerStyles}>
        <div className={textPartContainerStyles}>
          <TextPart {...textPart} />
          {textPart?.button?.text ? (
            <Link href={textPart?.link?.href ?? '/'}>
              <ButtonComponent background={'black'} className={buttonStyles}>
                {textPart.button.text}
              </ButtonComponent>
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
    </article>
  );
};

export default TextImage;
