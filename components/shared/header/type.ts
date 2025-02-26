import { ImagePropsType } from "../../../interfaces/common";


export interface LinkTypes {
    id: number,
    href: string,
    title: string,
    className: string,
}

export interface HeaderPropsType {
    logoImage: ImagePropsType[];
    className?: string;
}

export interface HeaderPropsLinksType extends HeaderPropsType {
    links: LinkTypes[];
}

export interface HeaderPropsLinksMobileType extends HeaderPropsLinksType {
    menuManageImage: ImagePropsType[];
}

export interface ImageNavBrandProps {
    logoImage: ImagePropsType;
    className?: string;
}

export interface NavLinkProps extends LinkTypes {
    isOverID?: number;
}

