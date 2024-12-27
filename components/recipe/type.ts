import {
  FooterProject,
  ImageTextSimpleBlock,
  ImageTextDesMobType,
  TextImageWithFlexType,
  TitleTextImagesFlexType,
  TextSimpleBlock,
  TextBlockElem,
  TitleTextImageGrid,
  ImageText,
} from '../../interfaces/common';

export interface ProjectRecipeTypes {
  imageTextWithFlexRecipe: TextImageWithFlexType;
  imageTextRecipeDesMob: ImageTextDesMobType;
  imageTextWithTitleRecipe: ImageTextSimpleBlock[];
  imagesTextWithTitleRecipe: TitleTextImagesFlexType;
  titleTextImageGridRecipe: ImageTextSimpleBlock[];
  imageTextWithFlexRecipe_1: TextImageWithFlexType;
  imageTextWithFlexRecipe_2: TextImageWithFlexType;
  textWithTitleRecipe_2: {
    title: TextBlockElem;
    textWithTitle: TextSimpleBlock[];
  };
  titleTextImageGridRecipe_1: TitleTextImageGrid;
  titleTextImageGridRecipe_2: TitleTextImageGrid;
  imageTextRecipe: ImageText;
  footerProject: FooterProject;
}
