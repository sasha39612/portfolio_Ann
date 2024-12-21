import {
  FooterProject,
  ImagePropsType,
  ImageText,
  ImageTextDesMobType,
  PersonDataType,
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

export interface ImageBackground {
  imagePartDesktop: ImagePropsType;
  imagePartMobile: ImagePropsType;
}

export interface ProjectVintageTypes {
  imageTextWithFlexVintage: TextImageWithFlexType;
  imageTextWithFlexVintage_1: TextImageWithFlexType;
  textWithTitleVintage: TextSimpleBlock[];
  imageTextVintageDesMob: ImageTextDesMobType;
  textWithTitleVintage_1: TextSimpleBlock[];
  textWithTitleVintage_2: TextSimpleBlock[];
  imageBackground: ImageBackground;
  personDataVintage: PersonDataType;
  imageTextVintage_1: ImageText;
  imageTextVintage_2: ImageText;
  imageTextVintage_13: TextSimpleBlock[];
  footerProject: FooterProject;
}
