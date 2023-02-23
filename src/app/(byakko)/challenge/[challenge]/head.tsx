import { CommonMeta } from '@/app/commonMeta';
import { challenges } from '@/challenges';

export default function Head({ params }: { params: { challenge: string } }) {
  const { title } = challenges[params.challenge] || {};
  return (
    <>
      <title>{`${title} - Homepage`}</title>
      <meta name="description" content={`${title} - ATORA`} />
      <CommonMeta />
    </>
  );
}
