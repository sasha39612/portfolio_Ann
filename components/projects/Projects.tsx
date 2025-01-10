'use client';
import Link from 'next/link';
import cn from 'classnames';
import ImageComponent from '../ui/image/Image';
import { ProjectsUX_UI_Type, ProjectsTypes } from './type';
import styles from './projects.module.scss';

const getImageStyles = (projectClassNames?: string) =>
  cn(styles.mainImage, projectClassNames ? styles[projectClassNames] : '');

const Projects = ({
  proudText,
  buttonTitle,
  links,
  projectsUX_UI,
}: ProjectsTypes) => {
  const buttonStyles = cn(styles.buttonTitle, styles.buttonTitleActive);

  return (
    <section>
      <div className={styles.buttonWrapper}>
        <Link
          href={links[0] ?? '/'}
          className={buttonStyles}
          aria-label="UI/UX button link"
        >
          {buttonTitle[0]}
        </Link>
        <Link
          href={links[1] ?? '/'}
          className={styles.buttonTitle}
          aria-label="Graphic Design"
        >
          {buttonTitle[1]}
        </Link>
      </div>
      <div className={styles.projectsWrapper}>
        <div className={styles.projectNameStylesReverse}>{proudText}</div>

        {Array.isArray(projectsUX_UI) ? (
          <ul className={styles.projectsUXWrapper}>
            {projectsUX_UI.map((project: ProjectsUX_UI_Type) => (
              <li key={project.id} className={styles.projectsUXContainer}>
                <h2 className={styles.projectTitle}>{project.title}</h2>
                <ImageComponent
                  {...project.image}
                  className={getImageStyles(project.image.imageClassName)}
                  objectFit="contain"
                />
                <Link
                  href={project?.link?.href ?? '/'}
                  className={
                    styles[
                      project?.button?.className ? project.button.className : ''
                    ]
                  }
                  aria-label="Link to Home page"
                >
                  {project.button.text}
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
};

export default Projects;
