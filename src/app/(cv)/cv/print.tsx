'use client';

import { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';

import styles from './print.module.css';

let html2pdf: any;
export const PrintToPdf = ({ id }: { id: string }) => {
  const [isPrinting, setIsPrinting] = useState(false);

  useEffect(() => {
    async function getLib() {
      // @ts-ignore
      html2pdf = (await import('html2pdf.js')).default;
    }
    getLib();
  }, []);

  const printToPdf = async () => {
    if (!html2pdf) {
      return;
    }

    setIsPrinting(true);
    setTimeout(async () => {
      await html2pdf(document.getElementById(id), {
        filename: 'abienne_cv.pdf',
        html2canvas: {
          onclone: (element: any) => {
            const svgElements = Array.from(element.querySelectorAll('svg'));
            svgElements.forEach((s: any) => {
              const bBox = s.getBBox();
              s.setAttribute('x', bBox.x);
              s.setAttribute('y', bBox.y);
              s.setAttribute('width', bBox.width);
              s.setAttribute('height', bBox.height);
            });
          },
        },
      });

      setIsPrinting(false);
    }, 250);
  };

  return (
    <button onClick={printToPdf} className={styles.button}>
      {isPrinting ? 'Generating...' : 'Generate PDF'}
    </button>
  );
};
