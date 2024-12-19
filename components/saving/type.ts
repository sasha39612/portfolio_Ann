import {
  ImagePropsType,
  TextBlock,
  TextImageType,
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

export interface ProjectSavingTypes {
  imageText: TextBlock;
  imageTextSaving: TextImageType;
  imageTextWithFlexSaving: TextImageWithFlexType;
  textWithTitleSaving: TextSimpleBlock[];
  textWithoutTitleSaving: TextSimpleBlock[];
  imageTextSaving_1: ImageTextSaving;
  imageTextSaving_2: ImageTextSaving;
  imageTextSaving_3: ImageTextSaving;
  imageTextSaving_4: ImageTextSaving;
  imageTextSaving_5: ImageTextSaving;
  imageTextSaving_6: ImageTextSaving;
  imageTextSaving_7: ImageTextSaving;
  imageTextSaving_8: ImageTextSaving;
  imageTextSaving_9: ImageTextSaving;
  imageTextSaving_10: ImageTextSaving;
  imageTextSaving_11: ImageTextSaving;
  imageTextSaving_12: ImageTextSaving;
  imageTextSaving_13: TextSimpleBlock[];
}
