import { notFound } from 'next/navigation';
import getPropsData from '../lib/getPropsData';
import TextImage from '../components/textImage/TextImage';
import { TextImageType } from '../interfaces/common';

export default function Home() {
  const props = getPropsData('home', 'hero.mdx');
  if (!props) {
    notFound();
  }
  const { textImageProps, textImagePropsProjects } = props;

  return (
    <>
      <section>
        <TextImage {...textImageProps} />
      </section>
      <section>
        <ul>
          {textImagePropsProjects.length
            ? textImagePropsProjects.map((project: TextImageType) => (
                <li key={project.id}>
                  <TextImage {...project} />
                </li>
              ))
            : null}
        </ul>
      </section>
    </>
  );
}
