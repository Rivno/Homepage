'use client';

import hljs from 'highlight.js/lib/core';
import elixir from 'highlight.js/lib/languages/elixir';
import ini from 'highlight.js/lib/languages/ini';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
import { HTMLAttributes, useEffect, useRef } from 'react';

import styles from './code.module.css';
import 'highlight.js/styles/a11y-dark.css';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('ini', ini);
hljs.registerLanguage('elixir', elixir);

export function Code({
  fileName,
  children,
  ...props
}: HTMLAttributes<HTMLPreElement> & { fileName?: string }) {
  const ref = useRef<HTMLPreElement>(null);

  useEffect(() => {
    if (ref.current) {
      hljs.highlightElement(ref.current);
    }
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
