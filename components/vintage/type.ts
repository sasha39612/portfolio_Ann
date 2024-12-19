import {
  FooterProject,
  ImagePropsType,
  TextSimpleBlock,
} from '../../interfaces/common';

export interface ImageTextSaving {
  textPart: {
    id: string;
    title: string;
    description: string;
    classNameTitle: string;
    classNameDescription: string;
  };
  imagePartDesktop?: ImagePropsType;
  imagePartMobile?: ImagePropsType;
  imagePartDesktopSlider?: ImagePropsType[];
  imagePartMobileSlider?: ImagePropsType[];
}

export interface ProjectVintageTypes {
  imageTextVintage_13: TextSimpleBlock[];
  footerProject: FooterProject;
}
