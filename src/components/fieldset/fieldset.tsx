import { ReactNode } from 'react';

import styles from './fieldset.module.css';

const Fieldset = ({ children }: { children: ReactNode }) => {
  return <fieldset className={styles.fieldset}>{children}</fieldset>;
};

const Legend = ({ children }: { children: ReactNode }) => {
  return <legend className={styles.legend}>{children}</legend>;
};

Fieldset.Legend = Legend;

export default Fieldset;
