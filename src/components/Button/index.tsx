import React from 'react';

import styles from './index.module.scss';

type ButtonProps = {
  danger?: boolean | undefined;
  primary?: boolean | undefined;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  props?: object;
}

const Button: React.FC<ButtonProps> = ({ danger, primary, children, onClick, ...props }) => {
  let styleButton = 'button';
  styleButton = danger ? 'danger' : styleButton;
  styleButton = primary ? 'primary' : styleButton;

  return (
    <button type="button" className={styles[styleButton]} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
