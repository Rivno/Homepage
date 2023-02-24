import { CommonMeta } from '@/app/commonMeta';

export default function Head() {
  return (
    <>
      <title>Articles - ATORA</title>
      <meta name="description" content="Articles - ATORA" />
      <link
        rel="stylesheet"
        // @ts-ignore
        precedence="default"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/a11y-dark.min.css"
      />
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/highlight.min.js"
        async
      />
      <CommonMeta />
    </>
  );
}
