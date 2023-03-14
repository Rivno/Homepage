import React from 'react';

import { Code } from '@/components/code';

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.
function H1({ children }) {
  // ...
}

function H2({ children }) {
  // ...
}

// function Pre(props) {
//   console.log('props', props);
//   return <Code {...props} />;
// }

function Pre({ fileName, children, ...props }) {
  if (React.isValidElement(children) && children.type === 'code') {
    return (
      <Code fileName={fileName} {...props}>
        {children}
      </Code>
    );
  }
  return <pre {...props}>{children}</pre>;
}

export function useMDXComponents(components) {
  // return { h1: H1, h2: H2, ...components };
  return { pre: Pre, ...components };
}
