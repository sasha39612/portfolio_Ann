import Link from 'next/link';
import { notFound } from 'next/navigation';
import FooterContactLinks from './footerContactLinks/footerContactLinks';
import getPropsData from '../../../lib/getPropsData';
import ImageComponent from '../../ui/image/Image';
import { FooterPropsType, ImageNavBrandProps } from './type';
import styles from './footer.module.scss';

const ImageNavBrand = (props: ImageNavBrandProps) => {
  const { logoImage } = props;

  return (
    <Link
      href="/"
      className={styles.classNameLink}
      aria-label="Link to Home page"
      prefetch={false}
    >
      <ImageComponent
        {...logoImage}
        layout="fill"
        objectFit="contain"
        className={styles.logo}
      />
    </Link>
  );
};

const Footer = () => {
  const props = getPropsData('footer', 'links.mdx') as FooterPropsType;
  if (!props) {
    notFound();
  }
  const { logoImage, footerTitle, footerLinksLeft, footerLinksRight } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.contacts}>
        <h3 className={styles.contactLinkTitle}>{footerTitle}</h3>
        <div className={styles.contactLinkWrapper}>
          <FooterContactLinks footerLinks={footerLinksLeft} />
          <FooterContactLinks footerLinks={footerLinksRight} />
        </div>
      </div>
      <ImageNavBrand logoImage={logoImage[0]} />
    </div>
  );
};

export default Footer;
