import { AnchorHTMLAttributes } from 'react';

import styles from './anchor.module.css';

const Anchor = ({
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a className={styles.a} {...props}>
      {children}
    </a>
  );
};

export default Anchor;
