'use client';
import Link from 'next/link';
import cn from 'classnames';
import ImageComponent from '../../ui/image/Image';
import { ProjectsGraphicDesignType, ProjectsTypes } from '../type';
import styles from './projectsDesign.module.scss';

const getImageStyles = (projectClassNames?: string) =>
  cn(styles.mainImage, projectClassNames ? styles[projectClassNames] : '');

const ProjectsDesign = ({
  proudText,
  buttonTitle,
  links,
  projectsGraphicDesign,
}: ProjectsTypes) => {
  const buttonStyles = cn(styles.buttonTitle, styles.buttonTitleActive);

  return (
    <section>
      <div className={styles.buttonWrapper}>
        <Link
          href={links[0] ?? '/'}
          className={styles.buttonTitle}
          aria-label="UX/UI button"
          prefetch={false}
        >
          {buttonTitle[0]}
        </Link>
        <Link
          href={links[1] ?? '/'}
          className={buttonStyles}
          aria-label="Graphic Design"
          prefetch={false}
        >
          {buttonTitle[1]}
        </Link>
      </div>
      <div className={styles.projectsWrapper}>
        <div className={styles.projectNameStylesReverse}>{proudText}</div>
        <>
          {Array.isArray(projectsGraphicDesign) ? (
            <ul className={styles.projectsGraphicDesignWrapper}>
              {projectsGraphicDesign.map(
                (project: ProjectsGraphicDesignType) => (
                  <li
                    key={project.id}
                    className={styles.projectsGraphicContainer}
                  >
                    <ImageComponent
                      {...project.image}
                      className={getImageStyles(project.image.imageClassName)}
                    />
                  </li>
                ),
              )}
            </ul>
          ) : null}
        </>
      </div>
    </section>
  );
};

export default ProjectsDesign;
