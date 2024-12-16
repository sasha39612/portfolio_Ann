import { notFound } from "next/navigation";
import Projects from "../../components/projects/Projects"
import { ProjectsTypes } from "../../components/projects/type";
import getPropsData from "../../lib/getPropsData";

const MyProjects = () => {
    const projectsProps = getPropsData('projects', 'projects.mdx') as ProjectsTypes;
    if (!projectsProps) {
        notFound()
    }

    return (
        <Projects {...projectsProps} />
    )
}

export default MyProjects
