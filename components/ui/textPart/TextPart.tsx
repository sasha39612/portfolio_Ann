import { TextBlock } from "../../../interfaces/common"
import cn from 'classnames'
import styles from './textPart.module.scss'



const TextPart = ({ title, subTitle, description }: TextBlock) => {
  const titleStyle = cn(title?.className ? `${styles[title.className]}` : '')
  const subTitleStyle = cn(subTitle?.className ? `${styles[subTitle.className]}` : '')
  const descriptionStyle = cn(description?.className ? `${styles[description.className]}` : '')

  return (
    <div className={styles.container}>
      <h1 className={titleStyle}>{title?.text}</h1>
      <p className={subTitleStyle}>{subTitle?.text}</p>
      <p className={descriptionStyle}>{description?.text}</p>
    </div>
  )
}

export default TextPart
