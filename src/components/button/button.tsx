import { ButtonHTMLAttributes } from 'react';

import styles from './button.module.css';

const Button = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={styles.base} {...props}>
      {children}
    </button>
  );
};

export default Button;
