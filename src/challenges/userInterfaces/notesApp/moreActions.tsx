'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import styles from './notesApp.module.css';

export const MoreActions = () => {
  const wrapperRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => setIsOpen((val) => !val);

  const handleClickOutside = useCallback((event: any) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }, []);

  const onSpaceOut = useCallback((event: any) => {
    if (
      wrapperRef.current &&
      document.activeElement !== wrapperRef.current &&
      (event.key == ' ' || event.code == 'Space' || event.keyCode == 32)
    ) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keypress', onSpaceOut);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keypress', onSpaceOut);
    };
  }, [handleClickOutside, onSpaceOut]);

  return (
    <button
      className={styles.more_actions}
      tabIndex={0}
      aria-expanded={isOpen}
      onClick={onClick}
      ref={wrapperRef}
    >
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.more_actions_content}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M4.42602 12.3115L12 19.8854L19.574 12.3115C21.4753 10.4101 21.4753 7.32738 19.574 5.42602C17.6726 3.52466 14.5899 3.52466 12.6885 5.42602L12 6.11456L11.3115 5.42602C9.4101 3.52466 6.32738 3.52466 4.42602 5.42602C2.52466 7.32738 2.52466 10.4101 4.42602 12.3115Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
        <svg viewBox="0 0 1024 1024">
          <path
            fill="currentColor"
            d="M128 384v512h768V192H768v32a32 32 0 1 1-64 0v-32H320v32a32 32 0 0 1-64 0v-32H128v128h768v64H128zm192-256h384V96a32 32 0 1 1 64 0v32h160a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h160V96a32 32 0 0 1 64 0v32zm-32 384h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64z"
          />
        </svg>
      </div>
    </button>
  );
};
