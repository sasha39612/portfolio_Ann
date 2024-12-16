
import { notFound } from "next/navigation";
import getPropsData from "../../../lib/getPropsData";
import { ProjectSavingTypes } from "../../../components/saving/type";
import ProjectSaving from "../../../components/saving/Saving";

const Saving = () => {
    const projectProps = getPropsData('projects/project', 'saving.mdx') as ProjectSavingTypes;
    if (!projectProps) {
        notFound()
    }

    return (
        <ProjectSaving {...projectProps} />
    )
}


export default Saving
