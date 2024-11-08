/* eslint-disable @next/next/no-sync-scripts */
import { AlertDetectMobile } from '@/components/alertDetectMobile/alertDetectMobile';
import { AuthContext } from '@/components/auth/authContext';
import { Footer } from '@/components/footer';
import { FrontContextSettings } from '@/components/frontContextSettings';
import { Sidebar } from '@/components/sidebar';

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
      <head>
        {/* <script src="/scripts/theme-mode.js" /> */}
        <meta name="google-site-verification" content="-cLkUtsbhpmz0h_q2T5LGUfA_LGCS7BRdaIMX1KoiPo" />
      </head>
      <body>
        <AuthContext>
          <div className={styles.container}>
            <main>{children}</main>

            <Footer />

            <Sidebar />

            <FrontContextSettings />
          </div>

          <AlertDetectMobile />
        </AuthContext>
      </body>
    </html>
  );
}
