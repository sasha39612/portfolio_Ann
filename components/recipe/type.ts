import {
  FooterProject,
  ImageTextSimpleBlock,
  ImageTextDesMobType,
  TextImageWithFlexType,
  TitleTextImagesFlexType,
} from '../../interfaces/common';

export interface ProjectRecipeTypes {
  imageTextWithFlexRecipe: TextImageWithFlexType;
  imageTextRecipeDesMob: ImageTextDesMobType;
  imageTextWithTitleRecipe: ImageTextSimpleBlock[];
  imagesTextWithTitleRecipe: TitleTextImagesFlexType;
  titleTextImageGridRecipe: ImageTextSimpleBlock[];
  imageTextWithFlexRecipe_1: TextImageWithFlexType;
  imageTextWithFlexRecipe_2: TextImageWithFlexType;
  footerProject: FooterProject;
}
