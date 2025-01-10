import Link from 'next/link';
import ImageComponent from '../../ui/image/Image';
import { FooterProjectProps, ImageNavProps } from './type';
import cn from 'classnames';
import styles from './footerProject.module.scss';

const ImageNav = ({
  arrow,
  imageArrowHref,
  classNameImage,
  classNameLink,
}: ImageNavProps) => {
  const linkStyles = cn(styles.linkStyles, classNameLink);
  const imageStyles = cn(styles.imageStyles, classNameImage);
  return (
    <Link
      href={imageArrowHref ?? '/'}
      className={linkStyles}
      aria-label="Link to next project"
      prefetch={false}
    >
      <ImageComponent
        {...arrow}
        layout="fill"
        objectFit="contain"
        className={imageStyles}
      />
    </Link>
  );
};

const FooterProject = (props: FooterProjectProps) => {
  const {
    imageArrowLeft,
    imageArrowRight,
    title,
    imageArrowLeftName,
    imageArrowRightName,
    imageArrowLeftHref,
    imageArrowRightHref,
    className,
    classImageArrowName,
    classNameTitle,
    classNameImage,
    classNameLink,
  } = props;

  const wrapperStyle = cn(styles.wrapper, className);

  return (
    <div className={wrapperStyle}>
      {imageArrowLeft?.src ? (
        <div className={styles.imageContainer}>
          <ImageNav
            arrow={imageArrowLeft}
            imageArrowHref={imageArrowLeftHref}
            classNameImage={classNameImage}
            classNameLink={classNameLink}
          />
          <p className={classImageArrowName}>{imageArrowLeftName}</p>
        </div>
      ) : (
        <div className={styles.linkUnvisitableStyles} />
      )}
      <p className={classNameTitle}>{title}</p>
      {imageArrowRight?.src ? (
        <div className={styles.imageContainer}>
          <ImageNav
            arrow={imageArrowRight}
            imageArrowHref={imageArrowRightHref}
            classNameImage={classNameImage}
            classNameLink={classNameLink}
          />
          <p className={classImageArrowName}>{imageArrowRightName}</p>
        </div>
      ) : (
        <div className={styles.linkUnvisitableStyles} />
      )}
    </div>
  );
};

export default FooterProject;
