import TextImage from "../textImage/TextImage";
import TextImageWithFlex from "../textImageWithGrid/TextImageWithFlex";
import { ProjectSavingTypes } from "./type"

const ProjectSaving = (props: ProjectSavingTypes) => {
  const { imageTextSaving, imageTextWithGridSaving } = props;

  return (
    <>
      <TextImage {...imageTextSaving} />
      <TextImageWithFlex {...imageTextWithGridSaving} />
    </>
  )
}

export default ProjectSaving
