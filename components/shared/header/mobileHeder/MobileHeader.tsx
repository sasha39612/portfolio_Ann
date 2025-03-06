'use client';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';
import cn from 'classnames';
import ActiveLink from '../../activeLink/ActiveLink';
import Background from '../../../background/Background';
import ImageComponent from '../../../ui/image/Image';
import {
  HeaderPropsLinksMobileType,
  ImageNavBrandProps,
  NavLinkProps,
} from '../type';
import styles from './mobileHeader.module.scss';

const ImageNavBrand = ({ logoImage }: ImageNavBrandProps) => (
  <div className={styles.logoWrapper}>
    <Link href="/" aria-label="Link to Home page" prefetch={false}>
      <ImageComponent
        {...logoImage}
        layout="fill"
        objectFit="contain"
        className={styles.wrapperBrandImageComponent}
      />
    </Link>
  </div>
);

const NavLink = ({ href, title }: NavLinkProps) => (
  <div>
    <ActiveLink href={href}>
      <span>{title}</span>
    </ActiveLink>
  </div>
);

const MobileHeader = ({
  logoImage,
  menuManageImage,
  links,
  className,
}: HeaderPropsLinksMobileType) => {
  const [mounted, setMounted] = useState(false);
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(
    null,
  );

  useEffect(() => {
    setPortalContainer(document.body);
  }, []);

  const onLinkClick = () => {
    setTimeout(() => setMounted(false), 200);
  };

  const onCloseMenu = () => setMounted(false);
  const onOpenMenu = () => setMounted(true);

  const modalContent = (
    <Background background="black" className={styles.mobileHeaderBackground}>
      <nav className={cn(styles.wrapper, className)}>
        <div className={styles.logoAndCloseWrapper}>
          <ImageNavBrand logoImage={logoImage[0]} />
          <button
            type="button"
            className={styles.closeButton}
            onClick={onCloseMenu}
          >
            <ImageComponent
              {...menuManageImage?.[0]}
              layout="fill"
              objectFit="contain"
              className={styles.wrapperCloseImageMobile}
            />
          </button>
        </div>
        <ul className={styles.containerLinks} id="mobile">
          {links.map((link) => (
            <li
              key={link.id}
              className={styles.link}
              onClick={() => onLinkClick()}
            >
              <NavLink {...link} />
            </li>
          ))}
        </ul>
      </nav>
    </Background>
  );

  const modal =
    mounted && portalContainer
      ? ReactDOM.createPortal(modalContent, portalContainer)
      : null;

  return (
    <>
      {modal}
      {!mounted && (
        <div className={cn(styles.logoAndCloseWrapper, className)}>
          <ImageNavBrand logoImage={logoImage[1]} />
          <button
            type="button"
            className={styles.closeButton}
            onClick={onOpenMenu}
          >
            <ImageComponent
              {...menuManageImage?.[2]}
              layout="fill"
              objectFit="contain"
              className={styles.wrapperCloseImageMobile}
            />
          </button>
        </div>
      )}
    </>
  );
};

export default MobileHeader;
