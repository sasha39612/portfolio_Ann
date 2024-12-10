import Projects from "../../components/projects/Projects"
import { ProjectTypes } from "../../components/projects/type";
import getPropsData from "../../lib/getPropsData";

const MyProjects = () => {
    const projectsProps = getPropsData('projects', 'projects.mdx') as ProjectTypes;

    return (
        <Projects {...projectsProps} />
    )
}

export default MyProjects
