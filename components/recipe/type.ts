import {
  FooterProject,
  ImageTextSimpleBlock,
  ImageTextDesMobType,
  TextImageWithFlexType,
} from '../../interfaces/common';

export interface ProjectRecipeTypes {
  imageTextWithFlexRecipe: TextImageWithFlexType;
  imageTextRecipeDesMob: ImageTextDesMobType;
  imageTextWithTitleRecipe: ImageTextSimpleBlock[];
  footerProject: FooterProject;
}
