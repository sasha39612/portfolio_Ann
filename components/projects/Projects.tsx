'use client'
import { useState } from "react";
import Link from "next/link";
import cn from 'classnames';;
import ButtonComponent from "../ui/button/button";
import ImageComponent from "../ui/image/Image";
import { ProjectsGraphicDesignType, ProjectsUX_UI_Type, ProjectsTypes } from "./type";
import styles from './projects.module.scss'

const getButtonStyles = (buttonName: string, buttonTitle: string) => {
  const activeStyles = buttonName === buttonTitle ? styles.buttonTitleActive : ''
  return cn(styles.buttonTitle, activeStyles)
}

const getImageStyles = (projectClassNames?: string) => cn(styles.mainImage, projectClassNames ? styles[projectClassNames] : '')


const Projects = ({ proudText, buttonTitle, projectsUX_UI, projectsGraphicDesign }: ProjectsTypes) => {
  const [buttonName, setButtonName] = useState<string>(buttonTitle[0]);

  const handlerOnclick = () => {
    setButtonName(() => buttonName === buttonTitle[0] ? buttonTitle[1] : buttonTitle[0])
  }

  return (
    <section>

      <div className={styles.buttonWrapper}>
        <button onClick={handlerOnclick} className={getButtonStyles(buttonName, buttonTitle[0])}>
          {buttonTitle[0]}
        </button>
        <button onClick={handlerOnclick} className={getButtonStyles(buttonName, buttonTitle[1])}>
          {buttonTitle[1]}
        </button>
      </div >
      <div className={styles.projectsWrapper}>
        <div className={styles.projectNameStylesReverse}>{proudText}</div>
        {
          buttonName === buttonTitle[0] ?
            <>
              {Array.isArray(projectsUX_UI) ?
                <ul className={styles.projectsUXWrapper}>
                  {
                    projectsUX_UI.map((project: ProjectsUX_UI_Type) => (
                      <li key={project.id} className={styles.projectsUXContainer}>
                        <h2 className={styles.projectTitle}>{project.title}</h2>
                        <ImageComponent {...project.image} className={getImageStyles(project.image.imageClassName)} objectFit="contain" />
                        <Link href={project?.link?.href ?? '/'}>
                          <ButtonComponent background={'black'} className={styles[project?.button?.className ? project.button.className : '']}>
                            {project.button.text}
                          </ButtonComponent>
                        </Link>
                      </li>
                    ))
                  }
                </ul>
                : null}
            </>
            : <>
              {Array.isArray(projectsGraphicDesign) ?
                <ul className={styles.projectsGraphicDesignWrapper}>
                  {
                    projectsGraphicDesign.map((project: ProjectsGraphicDesignType) => (
                      <li key={project.id} className={styles.projectsGraphicContainer}>
                        <ImageComponent {...project.image} className={getImageStyles(project.image.imageClassName)} />
                      </li>
                    ))
                  }
                </ul>
                : null}
            </>
        }
      </div>
    </section>
  )
}

export default Projects
