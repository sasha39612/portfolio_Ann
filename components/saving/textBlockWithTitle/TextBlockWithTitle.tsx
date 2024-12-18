'use client';
import Text from '../../ui/text/Text';
import { TextSimpleBlock } from '../../../interfaces/common';
import styles from './textBlockWithTitle.module.scss';

const TextBlockWithTitle = ({
  textWithTitleSaving,
}: {
  textWithTitleSaving: TextSimpleBlock[];
}) => {
  return (
    <ul className={styles.wrapperWithTitle}>
      {Array.isArray(textWithTitleSaving)
        ? textWithTitleSaving.map((item) => (
            <li key={item.id} className={styles[item.classNameContainer ?? '']}>
              <Text
                {...item}
                classNameTitle={styles[item.classNameTitle ?? '']}
                classNameDescription={styles[item.classNameDescription ?? '']}
              />
            </li>
          ))
        : null}
    </ul>
  );
};

export default TextBlockWithTitle;
