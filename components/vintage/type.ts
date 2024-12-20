import {
  FooterProject,
  ImagePropsType,
  ImageTextDesMobType,
  TextImageWithFlexType,
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
  imageTextWithFlexVintage: TextImageWithFlexType;
  imageTextWithFlexVintage_1: TextImageWithFlexType;
  textWithTitleVintage: TextSimpleBlock[];
  imageTextVintageDesMob: ImageTextDesMobType;
  imageTextVintage_13: TextSimpleBlock[];
  footerProject: FooterProject;
}
