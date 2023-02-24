'use client';

import { HTMLAttributes, useEffect, useRef } from 'react';

import styles from './code.module.css';

export function Code({
  fileName,
  children,
  ...props
}: HTMLAttributes<HTMLPreElement> & { fileName?: string }) {
  const ref = useRef(null);

  useEffect(() => {
    // @ts-ignore
    hljs.highlightBlock(ref.current);
  }, []);

  return (
    <div className={styles.container}>
      {fileName ? <p className={styles.file_name}>{fileName}</p> : null}
      <pre ref={ref} {...props}>
        {children}
      </pre>
    </div>
  );
}
