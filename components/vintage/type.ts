import {
  FooterProject,
  ImagePropsType,
  ImageText,
  ImageTextDesMobType,
  ImageTextDesMobTypeWrapper,
  PersonDataType,
  TextBlockElem,
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
  textWithTitleVintage: {
    title: TextBlockElem;
    textWithTitle: TextSimpleBlock[];
  };
  imageTextVintageDesMob: ImageTextDesMobType;
  textWithTitleVintage_1: {
    title: TextBlockElem;
    textWithTitle: TextSimpleBlock[];
  };
  textWithTitleVintage_2: {
    title: TextBlockElem;
    textWithTitle: TextSimpleBlock[];
  };
  imageBackground: ImageBackground;
  personDataVintage: PersonDataType;
  imageTextVintage_1: ImageText;
  imageTextVintage_2: ImageText;
  imageTextVintageDesMobWrapper_1: ImageTextDesMobTypeWrapper;
  imageTextVintage_3: ImageText;
  imageTextVintage_13: TextSimpleBlock[];
  footerProject: FooterProject;
}
