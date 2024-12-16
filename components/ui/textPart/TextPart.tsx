"use client";

import { ImagePropsType, TextBlock, TextBlockElemArr } from "../../../interfaces/common"
import cn from 'classnames'
import styles from './textPart.module.scss'
import { CSSProperties, MouseEvent, useState } from "react"
import ImageComponentPopup from "../imageContentPopup/ImageContentPopup";

const getIconStyles = (iconClassName?: string) => {
  return cn(styles.icon, iconClassName ? styles[iconClassName] : '')
}

interface CustomCSSProperties extends CSSProperties {
  "--icon-content"?: string;
}

const getIconContent = (iconContent?: string) => {
  const style: CustomCSSProperties = {
    "--icon-content": `url(${iconContent})`,
  };

  return style
}

const TextPart = ({ title, subTitle, description, container, image, popupContent, className = ' ' }: TextBlock) => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupContentSaved, setPopupContentSaved] = useState<ImagePropsType[]>([]);

  const containerStyles = cn(styles.container, container?.className ? styles[container.className] : '', className)
  const titleStyle = cn(title?.className ? `${styles[title.className]}` : '', className)
  const subTitleStyle = cn(subTitle?.className ? `${styles[subTitle.className]}` : '', className)
  const descriptionStyle = !Array.isArray(description) ? cn(description?.className ? `${styles[description.className]}` : '', className) : ''

  const handleClosePopup = () => setPopupVisible(false);

  const handleOnClick = (e: MouseEvent<HTMLSpanElement>, content?: ImagePropsType[]) => {
    e.preventDefault();
    setPopupVisible(true);
    setPopupContentSaved(content ?? [])
  }

  return (
    <div className={containerStyles}>
      <h1 className={titleStyle}>
        {title?.text}
        {image?.src ? <span onClick={(e) => handleOnClick(e, popupContent)} className={getIconStyles(image?.className)} style={getIconContent(image?.src)} /> : null}
      </h1>
      <p className={subTitleStyle}>{subTitle?.text}</p>
      {Array.isArray(description) ?
        <ul>
          {description?.map((item: TextBlockElemArr) => (
            <li key={item.id}>
              <p className={styles[item?.className ?? '']}>{item?.text}
                {item?.image?.src ? <span onClick={(e) => handleOnClick(e, item.popupContent)} className={getIconStyles(item?.image?.className)} style={getIconContent(item?.image?.src)} /> : null}
              </p>
            </li>
          ))}
        </ul>
        :
        <>
          <p className={descriptionStyle}>{description?.text}
            {description?.image?.src ? <span onClick={(e) => handleOnClick(e, popupContent)} className={getIconStyles(description?.image?.className)} style={getIconContent(description?.image?.src)} /> : null}
          </p>
        </>
      }
      {popupVisible ? <ImageComponentPopup handleClosePopup={handleClosePopup} content={popupContentSaved} /> : null}
    </div>
  )
}

export default TextPart
