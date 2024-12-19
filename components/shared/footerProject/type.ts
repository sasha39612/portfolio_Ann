import { ImagePropsType } from '../../../interfaces/common';

export interface ImageNavProps {
  arrow: ImagePropsType;
  imageArrowHref?: string;
  classNameImage?: string;
  classNameLink?: string;
}

export interface FooterProjectProps {
  title: string;
  imageArrowLeft: ImagePropsType;
  imageArrowRight: ImagePropsType;
  imageArrowLeftName: string;
  imageArrowRightName: string;
  imageArrowLeftHref: string;
  imageArrowRightHref: string;
  className: string;
  classNameTitle: string;
  classNameImage: string;
  classNameLink?: string;
}
