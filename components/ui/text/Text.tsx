'use client';
import { TextSimpleBlock } from '../../../interfaces/common';

const Text = ({
  title,
  subTitle,
  description,
  classNameTitle,
  classNameSubTitle,
  classNameDescription,
}: TextSimpleBlock) => {
  return (
    <>
      {title ? <div className={classNameTitle}>{title}</div> : null}
      {subTitle ? <div className={classNameSubTitle}>{subTitle}</div> : null}
      {description ? (
        <div className={classNameDescription}>{description}</div>
      ) : null}
    </>
  );
};

export default Text;
