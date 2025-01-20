import {
  FooterProject,
  ImagePropsType,
  ImageText,
  TextBlock,
  TextBlockElem,
  TextImageType,
  TextImageWithFlexType,
  TextSimpleBlock,
} from '../../interfaces/common';

export interface ProjectSavingTypes {
  imageText: TextBlock;
  imageTextSaving: TextImageType;
  imageTextWithFlexSaving: TextImageWithFlexType;
  textWithTitleSaving: {
    title: TextBlockElem;
    textWithTitle: TextSimpleBlock[];
  };
  textWithoutTitleSaving: TextSimpleBlock[];
  imageTextSaving_1: ImageText;
  imageTextSaving_2: ImageText;
  imageTextSaving_3: ImageText;
  imageTextSaving_4: ImageText;
  imageTextSaving_5: ImageText;
  imageTextSaving_6: ImageText;
  imageTextSaving_7: ImageText;
  imageTextSaving_8: ImageText;
  imageTextSaving_9: ImageText;
  imagePartMobileSlider: ImagePropsType[];
  imageTextSaving_11: ImageText;
  imageTextSaving_12: ImageText;
  imageTextSaving_13: TextSimpleBlock[];
  footerProject: FooterProject;
}
