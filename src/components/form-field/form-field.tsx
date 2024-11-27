import { ReactNode } from 'react';

import styles from './form-field.module.css';

const FormField = ({ children }: { children: ReactNode }) => {
  return <div className={styles.field}>{children}</div>;
};

export default FormField;
