import { InputHTMLAttributes } from 'react';

import styles from './text-input.module.css';

const TextInput = ({ ...props }: InputHTMLAttributes<HTMLInputElement>) => (
  <input className={styles.input} {...props} />
);

export default TextInput;
