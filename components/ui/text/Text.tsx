'use client';
import { TextSimpleBlock } from '../../../interfaces/common';

const Text = ({
  title,
  description,
  classNameTitle,
  classNameDescription,
}: TextSimpleBlock) => {
  return (
    <>
      {title ? <div className={classNameTitle}>{title}</div> : null}
      <div className={classNameDescription}>{description}</div>
    </>
  );
};

export default Text;
