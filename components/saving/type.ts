import { TextBlock, TextImageType, TextImageWithFlexType, TextSimpleBlock } from "../../interfaces/common";

export interface ProjectSavingTypes {
  imageText: TextBlock;
  imageTextSaving: TextImageType;
  imageTextWithFlexSaving: TextImageWithFlexType;
  textWithTitleSaving: TextSimpleBlock[];
  textWithoutTitleSaving: TextSimpleBlock[];
}
