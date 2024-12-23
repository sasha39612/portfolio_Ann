import { notFound } from 'next/navigation';
import getPropsData from '../../../lib/getPropsData';
import ProjectRecipe from '../../../components/recipe/Recipe';
import { ProjectRecipeTypes } from '../../../components/recipe/type';

const Recipe = () => {
  const projectProps = getPropsData(
    'projects/project',
    'recipe.mdx',
  ) as ProjectRecipeTypes;
  if (!projectProps) {
    notFound();
  }

  return <ProjectRecipe {...projectProps} />;
};

export default Recipe;
