'use client';

import { InputHTMLAttributes, useCallback, useRef } from 'react';

export function Checkbox(
  props: Omit<InputHTMLAttributes<HTMLInputElement>, 'type | onClick'>
) {
  const onClick = useCallback(() => {
    const checkboxs = document.querySelectorAll<HTMLInputElement>(
      `input[name='${props.name}']`
    );

    for (let i = 0; i < checkboxs.length; i += 1) {
      const checkbox = checkboxs[i];
      if (checkbox.value !== props.value) {
        checkbox.checked = false;
      }
    }
  }, []);

  return <input type="checkbox" onClick={onClick} {...props} />;
}
