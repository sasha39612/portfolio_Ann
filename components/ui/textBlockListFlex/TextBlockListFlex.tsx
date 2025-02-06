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
              <h3 className={styles?.[textBlock?.classNameTitle ?? '']}>
                {textBlock.title}
              </h3>
              {Array.isArray(textBlock.description) ? (
                <ul className={styles.descriptionWrapper}>
                  {textBlock.description.map((item) => (
                    <li key={item.id} className={styles[item?.className ?? '']}>
                      {item.text}
                    </li>
                  ))}
                </ul>
              ) : (
                <div
                  className={styles?.[textBlock?.classNameDescription ?? '']}
                >
                  {textBlock.description}
                </div>
              )}
            </li>
          ))
        : null}
    </ul>
  );
};

export default TextBlockListFlex;
