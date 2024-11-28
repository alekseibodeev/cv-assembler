import { TextareaHTMLAttributes } from 'react';

import styles from './text-area.module.css';

const TextArea = ({
  children,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <textarea className={styles.textarea} {...props}>
      {children}
    </textarea>
  );
};

export default TextArea;
