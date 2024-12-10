import { LinkTypes } from "../header/type"; 
import { ImagePropsType } from "../../../interfaces/common";

export interface FooterLinkTypes {
    id: number,
    href: string;
    title: string;
    className?: string;
    icon: ImagePropsType;
}

export interface FooterSocialLinkTypes {
    id: number,
    href: string;
    className?: string;
    icon: ImagePropsType;
}

export interface FooterPropsType {
    logoImage: ImagePropsType[];
    className?: string;
    footerLinks: FooterLinkTypes[];
    footerSocialLinks: FooterSocialLinkTypes[];
}

export interface ImageNavBrandProps {
    logoImage: ImagePropsType;
    className?: string;
}

export interface FooterLinksType {
    footerLinks: FooterLinkTypes[];
}

export interface FooterSocialLinksType {
    footerSocialLinks: FooterSocialLinkTypes[];
}

export interface NavLinkProps extends LinkTypes {
    isOverID: number;
}
