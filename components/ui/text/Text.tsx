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
      <div className={classNameDescription}>{description}</div>
    </>
  );
};

export default Text;
