import NextImage from "next/legacy/image";
import cn from 'classnames';
import { ImagePropsType } from '../../../interfaces/common';
import styles from './image.module.scss'


const ImageComponent = (props: ImagePropsType) => {
    const { className, imageClassName, objectFit, priority, loading, ...rest } = props;
    const wrapperClassNames = cn(styles.wrapper, className);

    const imageClassNames = cn(
        {
            [styles.fitContain]: objectFit === 'contain',
            [styles.fitCover]: objectFit === 'cover',
            [styles.fitFill]: objectFit === 'fill',
        },
        imageClassName
    )

    return (
        <div className={wrapperClassNames}>
            <NextImage
                layout="fill"
                sizes="(max-width: 1280px) 150vw, 100vw"
                className={imageClassNames}
                priority={priority}
                loading={loading ?? 'lazy'}
                {...rest}
            />
        </div>
    )
}

export default ImageComponent;
