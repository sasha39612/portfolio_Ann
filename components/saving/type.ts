import { ImagePropsType, TextBlock, TextImageType, TextImageWithFlexType, TextSimpleBlock } from "../../interfaces/common";

export interface ImageTextSaving_1 {
textPart: {id: string; title: string; description: string; classNameTitle: string, classNameDescription: string; };
imagePartDesktop: ImagePropsType;
imagePartMobile: ImagePropsType;
}

export interface ProjectSavingTypes {
  imageText: TextBlock;
  imageTextSaving: TextImageType;
  imageTextWithFlexSaving: TextImageWithFlexType;
  textWithTitleSaving: TextSimpleBlock[];
  textWithoutTitleSaving: TextSimpleBlock[];
  imageTextSaving_1: ImageTextSaving_1;
}


