'use client';
import { useEffect, useState } from 'react';
import ReactDom from 'react-dom';
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

const ImageNavBrand = (props: ImageNavBrandProps) => {
  const { logoImage } = props;

  return (
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
};

const NavLink = (props: NavLinkProps) => {
  const { href, title } = props;

  return (
    <div>
      {
        <ActiveLink href={href}>
          <span>{title}</span>
        </ActiveLink>
      }
    </div>
  );
};

const MobileHeader = ({
  logoImage,
  menuManageImage,
  links,
  className,
}: HeaderPropsLinksMobileType) => {
  const [isOverID, setIsOverID] = useState(99999);
  const [mounted, setMounted] = useState(false);

  const handleOnClick = (id: number) => {
    setIsOverID(id);
    setMounted(false);
  };

  useEffect(() => {
    setMounted(false);
  }, []);

  const onCloseMenu = () => {
    setMounted(false);
  };

  const onOpenMenu = () => {
    setMounted(true);
  };

  const modal = mounted ? (
    ReactDom.createPortal(
      <Background
        background={'black'}
        className={styles.mobileHeaderBackground}
      >
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
                onClick={() => handleOnClick(link.id)}
              >
                <NavLink isOverID={isOverID} {...link} />
              </li>
            ))}
          </ul>
        </nav>
      </Background>,
      document.body,
    )
  ) : (
    <div className={cn(styles.logoAndCloseWrapper, className)}>
      <ImageNavBrand logoImage={logoImage[1]} />
      <button type="button" className={styles.closeButton} onClick={onOpenMenu}>
        <ImageComponent
          {...menuManageImage?.[2]}
          layout="fill"
          objectFit="contain"
          className={styles.wrapperCloseImageMobile}
        />
      </button>
    </div>
  );

  return <>{modal}</>;
};

export default MobileHeader;
