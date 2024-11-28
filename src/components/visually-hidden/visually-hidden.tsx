import { ReactNode } from 'react';

import styles from './visually-hidden.module.css';

const VisuallyHidden = ({ children }: { children: ReactNode }) => {
  return <span className={styles.hidden}>{children}</span>;
};

export default VisuallyHidden;
