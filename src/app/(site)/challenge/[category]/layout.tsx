import { CATEGORIES } from '@/challenges';

export default async function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

export async function generateStaticParams() {
  const categories = Object.keys(CATEGORIES);

  return categories.map((category) => ({
    category,
  }));
}
