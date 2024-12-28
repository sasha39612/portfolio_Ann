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

export interface TitleTextImageDesMobType {
  title: string;
  description: string;
  classNameTitle: string;
  classNameDescription: string;
  classNameWrapper: string;
  imageTextRecipeDesMob: ImageTextDesMobType;
}

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
  titleTextImageDesMob: TitleTextImageDesMobType;
  titleTextImageGridRecipe_3: TitleTextImageGrid;
  footerProject: FooterProject;
}
