import Image from 'next/image';

import Img_404 from '@/public/404.png';

export default function NotFound() {
  return (
    <div className="error-404">
      <h1>Hum, you seem to be lost!</h1>
      <p>{"This page doesn't exist"}</p>

      <Image src={Img_404} alt="error 404 illustration" />
    </div>
  );
}
