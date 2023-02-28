/* eslint-disable @next/next/no-sync-scripts */
import { AuthContext } from '@/components/auth/authContext';
import { Footer } from '@/components/byakko/footer';
import { FrontContextSettings } from '@/components/byakko/frontContextSettings';
import { Sidebar } from '@/components/byakko/sidebar';

import { DetectMobile } from './detectMobile';

import './globals.css';
import styles from './layout.module.css';

export const metadata = {
  title: {
    default: 'Atora',
    template: '%s | Atora',
  },
  description: 'Allan Bienne Freelance ReactJS / NodeJS',
  authors: [{ name: 'Allan Bienne' }],
  keywords: [
    'Freelance',
    'Developer',
    'Next.js',
    'React',
    'JavaScript',
    'ReactJS',
    'Node',
    'NodeJS',
    'NextJS',
  ],
  openGraph: {
    title: 'Atora',
    description: 'Allan Bienne Freelance ReactJS / NodeJS',
    siteName: 'Atora',
    images: [
      {
        url: `${process.env.NEXTAUTH_URL}/preview.png`,
        width: 800,
        height: 524,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>{/* <script src="/scripts/theme-mode.js" /> */}</head>
      <body>
        <AuthContext>
          <div className={styles.container}>
            <main>{children}</main>

            <Footer />

            <Sidebar />

            <FrontContextSettings />
          </div>

          <DetectMobile />
        </AuthContext>
      </body>
    </html>
  );
}
