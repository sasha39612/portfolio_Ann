"use client";
import { TextSimpleBlock } from "../../../interfaces/common"

const Text = ({ title, description, classNameContainer, classNameTitle, classNameDescription }: TextSimpleBlock) => {

  return (
    <li className={classNameContainer}>
      {title ? <div className={classNameTitle}>{title}</div> : null}
      <div className={classNameDescription}>{description}</div>
    </li>
  )
}

export default Text
