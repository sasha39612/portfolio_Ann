import { TextBlock } from '../../../../interfaces/common';
import styles from './infoData.module.scss';

const InfoData = ({ title, description }: TextBlock) => {
  return (
    <>
      <span className={styles[title?.className ?? '']}>{title?.text}</span>
      {!Array.isArray(description) ? (
        <span className={styles[description?.className ?? '']}>
          {description?.text}
        </span>
      ) : null}
    </>
  );
};

export default InfoData;
