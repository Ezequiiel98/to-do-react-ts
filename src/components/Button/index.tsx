import React from 'react';

import styles from './index.module.scss';

type ButtonProps = {
  danger?: boolean | undefined;
  primary?: boolean | undefined;
  position?: string | undefined;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  props?: object;
}

const Button: React.FC<ButtonProps> = ({ danger, primary, position, children, onClick, ...props }) => {
  let styleButton = 'button';
  styleButton = danger ? 'danger' : styleButton;
  styleButton = primary ? 'primary' : styleButton;

  let positionButton = 'left';
  positionButton = position === 'right' ? 'right' : positionButton;
  positionButton = position === 'center' ? 'center' : positionButton;

  return (
    <button type="button" className={`${styles[styleButton]} ${styles[positionButton]}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
