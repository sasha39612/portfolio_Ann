import { notFound } from "next/navigation";
import AboutComponent from "../../components/about/About"
import { AboutType } from "../../interfaces/common";
import getPropsData from "../../lib/getPropsData";

const About = () => {
  const props = getPropsData('about', 'about.mdx') as AboutType;
  if (!props) {
    notFound()
  }

  return (
    <AboutComponent {...props} />
  )
}

export default About
