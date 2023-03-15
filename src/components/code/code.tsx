'use client';

import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import { HTMLAttributes } from 'react';

import { theme } from './theme';

import styles from './code.module.css';

export function Code({
  fileName,
  children,
  className = 'language-js',
  ...props
}: Omit<HTMLAttributes<HTMLPreElement>, 'children'> & {
  fileName?: string;
  children: string;
}) {
  const language = className.replace(/language-/, '');

  return (
    <div className={styles.container}>
      {fileName ? <p className={styles.file_name}>{fileName}</p> : null}
      <Highlight
        {...defaultProps}
        code={children.trim()}
        language={language as Language}
        theme={theme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={className}
            style={style}
            data-lines={String(tokens.length).length}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                <div className={styles.line_no}>{i + 1}</div>
                <div>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
