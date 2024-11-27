import { ReactNode } from 'react';

import styles from './form-section.module.css';

const FormSection = ({ children }: { children: ReactNode }) => {
  return <div className={styles.section}>{children}</div>;
};

export default FormSection;
