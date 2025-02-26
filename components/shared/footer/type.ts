import { LinkTypes } from '../header/type';
import { ImagePropsType } from '../../../interfaces/common';

export interface FooterLinkTypes {
  id: number;
  href: string;
  title: string;
  className?: string;
  icon: ImagePropsType;
}

export interface FooterPropsType {
  footerTitle: string;
  logoImage: ImagePropsType[];
  className?: string;
  footerLinksLeft: FooterLinkTypes[];
  footerLinksRight: FooterLinkTypes[];
  footerLinksBottom: FooterLinkTypes[];
}

export interface ImageNavBrandProps {
  logoImage: ImagePropsType;
  className?: string;
}

export interface FooterLinksType {
  footerLinks: FooterLinkTypes[];
}

export interface NavLinkProps extends LinkTypes {
  isOverID: number;
}
