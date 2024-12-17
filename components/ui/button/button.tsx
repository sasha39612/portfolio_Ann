import React, { ReactNode } from 'react';
import cn from 'classnames';
import styles from './button.module.scss';

export interface ButtonComponentType {
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  background: 'black' | 'white';
  children: ReactNode;
}

const ButtonComponent = (props: ButtonComponentType) => {
  const { type = 'button', background, children, className = '' } = props;

  const backgroundColor = cn(styles.backgroundWrapper, {
    [styles.black]: background === 'black',
    [styles.white]: background === 'white',
  });

  return (
    <button type={type} className={cn(backgroundColor, className)}>
      {children}
    </button>
  );
};

export default ButtonComponent;
