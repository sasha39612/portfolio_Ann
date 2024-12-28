import ImageTextDesMob from '../../ui/imageTextDesMob/ImageTextDesMob';
import { TitleTextImageDesMobType } from '../type';
import styles from './titleTextImageDesMob.module.scss';

const TitleTextImageDesMob = ({
  title,
  description,
  classNameTitle,
  classNameDescription,
  classNameWrapper,
  imageTextRecipeDesMob,
}: TitleTextImageDesMobType) => {
  return (
    <>
      <h2 className={styles[classNameTitle ?? '']}>{title}</h2>
      <p className={styles[classNameDescription ?? '']}>{description}</p>
      <ul className={styles[classNameWrapper]}>
        {Array.isArray(imageTextRecipeDesMob)
          ? imageTextRecipeDesMob.map((item) => (
              <li
                key={item.id}
                className={styles[item.classNameTextContainer ?? '']}
              >
                <ImageTextDesMob {...item} />
              </li>
            ))
          : null}
      </ul>
    </>
  );
};

export default TitleTextImageDesMob;
