import { TextImageType } from '../../interfaces/common'
import ButtonComponent from '../ui/button/button'
import ImageComponent from '../ui/image/Image'
import TextPart from '../ui/textPart/TextPart'
import cn from 'classnames';
import styles from './textImage.module.scss'


const TextImage = (props: TextImageType) => {
    const { textPart, imagePart, isProject, isReverse, projectName } = props
    const projectNumber = projectName?.split('#')?.[1]
    const wrapperStyles = cn(styles.wrapper, isProject ? isReverse ? styles.wrapperProjectReverse : styles.wrapperProject : '')
    const projectNameStyles = cn(isReverse ? styles.projectNameStylesReverse : styles.projectNameStyles)
    const containerStyles = cn(styles.container, isReverse ? styles.containerProjectReverse : '', styles[`project_${projectNumber}`])
    const textPartContainerStyles = cn(isProject ? styles.textPartContainerProject : styles.textPartContainer)
    const buttonStyles = cn(textPart?.button?.className ? `${styles[textPart.button.className]}` : '')
    const imageStyles = cn(styles.mainImage, imagePart?.imageClassName ? `${styles[imagePart.imageClassName]}` : '')

    return (
        <article className={wrapperStyles}>
            <div className={projectNameStyles}>{projectName}</div>
            <div className={containerStyles}>
                <div className={textPartContainerStyles}>
                    <TextPart {...textPart} />
                    {textPart?.button?.text ? <ButtonComponent background={'black'} className={buttonStyles}>{textPart.button.text}</ButtonComponent> : null}
                </div>
                <ImageComponent src={imagePart?.src ?? ''} alt={imagePart?.alt ?? 'Some image'} className={imageStyles} />
            </div>
        </article>
    )
}

export default TextImage
