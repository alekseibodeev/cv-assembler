import { ReactNode } from 'react';

import styles from './input-group.module.css';

const InputGroup = ({ children }: { children: ReactNode }) => {
  return <div className={styles.group}>{children}</div>;
};

export default InputGroup;
