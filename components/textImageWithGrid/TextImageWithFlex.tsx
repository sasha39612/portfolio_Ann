import cn from 'classnames';
import { TextImageWithGridType, TextGridBlock } from '../../interfaces/common';
import ImageComponent from '../ui/image/Image';
import styles from './textImageWithFlex.module.scss';


const TextImageWithFlex = (props: TextImageWithGridType) => {
  const { textPart, imagePart } = props
  const imageStyles = cn(styles.image, styles[imagePart?.className ?? ''])

  return (
    <article className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>{textPart?.title}</div>
        <div className={styles.description}>{textPart?.description}</div>
        <ul className={styles.textPartContainer}>
          {Array.isArray(textPart?.textGrid) ? textPart.textGrid.map((textBlock: TextGridBlock) => (
            <li key={textBlock.id} className={styles.textGridContainer}>
              <div className={styles.titleTextBlock}>
                {textBlock.title}
              </div>
              <div className={styles.descriptionTextBlock}>
                {textBlock.description}
              </div>
            </li>
          ))
            : null
          }
        </ul>
      </div>
      <ImageComponent src={imagePart?.src ?? ''} alt={imagePart?.alt ?? 'Some image'} priority={imagePart?.priority} loading={imagePart?.loading} className={imageStyles} />
    </article>
  )
}

export default TextImageWithFlex
