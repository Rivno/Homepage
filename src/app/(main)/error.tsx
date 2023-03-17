'use client'; // Error components must be Client components

import Image from 'next/image';
import { useEffect } from 'react';

import { Title } from '@/components/title';
import Img_500 from '@/public/500.png';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="error">
      <Title dontSplit>Uh oh! Something went wrong!</Title>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>

      <Image src={Img_500} alt="error illustration" />
    </div>
  );
}
