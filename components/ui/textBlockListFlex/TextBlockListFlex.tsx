import {
  TextBlockListFlexType,
  TextSimpleBlock,
} from '../../../interfaces/common';
import styles from './textBlockListFlex.module.scss';

const TextBlockListFlex = ({
  textGrid,
  className,
  classNameContainer,
}: TextBlockListFlexType) => {
  return (
    <ul className={styles[classNameContainer ?? '']}>
      {Array.isArray(textGrid) && textGrid?.length
        ? textGrid.map((textBlock: TextSimpleBlock) => (
            <li key={textBlock.id} className={styles[className ?? '']}>
              <div className={styles?.[textBlock?.classNameTitle ?? '']}>
                {textBlock.title}
              </div>
              <div className={styles?.[textBlock?.classNameDescription ?? '']}>
                {textBlock.description}
              </div>
            </li>
          ))
        : null}
    </ul>
  );
};

export default TextBlockListFlex;
