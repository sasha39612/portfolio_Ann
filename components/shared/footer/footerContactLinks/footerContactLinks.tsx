import Link from 'next/link';
import { FooterLinkTypes } from '../type';
import { FooterLinksType } from '../type';
import styles from './footerLinks.module.scss';
import ImageComponent from '../../../ui/image/Image';

const FooterLinks = (props: FooterLinkTypes) => {
  const { href, icon, title, className } = props;

  return (
    <Link href={href} className={className}>
      <div className={styles.contactLinkWrapper}>
        <ImageComponent
          {...icon}
          layout="fill"
          objectFit="contain"
          className={styles[icon?.className ?? '']}
        />
        <span className={styles.title}>{title}</span>
      </div>
    </Link>
  );
};

const FooterContactLinks = (props: FooterLinksType) => {
  const { footerLinks } = props;

  return (
    <ul className={styles.footerContactLinkWrapper}>
      {footerLinks.map((footerLink) => (
        <li key={footerLink.id}>
          <FooterLinks {...footerLink} />
        </li>
      ))}
    </ul>
  );
};

export default FooterContactLinks;
