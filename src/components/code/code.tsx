'use client';

import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import { HTMLAttributes, useCallback } from 'react';

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

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(children);
  }, [children]);

  return (
    <div className={styles.container}>
      <button className={styles.copy} onClick={onCopy}>
        <svg fill="currentColor" viewBox="0 0 1920 1920">
          <path
            d="M1468.183 451.76v1468.184H0V451.76h1468.183ZM1920 0v1468.296h-338.812V338.812H451.704V0H1920ZM338.812 1016.446h790.56V903.509h-790.56v112.937Zm0 225.874h564.686v-112.937H338.812v112.937Zm0 225.988h790.56v-113.05h-790.56v113.05Z"
            fillRule="evenodd"
          />
        </svg>
      </button>
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
