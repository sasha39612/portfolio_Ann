import TextImage from "../textImage/TextImage";
import { ProjectSavingTypes } from "./type"

const ProjectSaving = (props: ProjectSavingTypes) => {
  const { imageTextSaving } = props;

  return (
    <TextImage {...imageTextSaving} />
  )
}

export default ProjectSaving
