import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import { getProviders } from 'next-auth/react';

import { authOptions } from '../../../pages/api/auth/[...nextauth]';

import { SignInButton } from './signinButton';

import styles from './page.module.css';

const REGEX_FUCK_AZURE =
  /^\/\/pipe\/([{]?[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}[}]?)/;

export default async function SignIn({
  searchParams,
}: {
  searchParams: { callbackUrl: string; noRedirect: boolean };
}) {
  const session = await getServerSession(authOptions);

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (session) {
    let pathname = '/';

    if (searchParams.callbackUrl) {
      const url = new URL(searchParams.callbackUrl);
      pathname = url.pathname.replace(REGEX_FUCK_AZURE, '');
    }

    if (!searchParams.noRedirect) {
      redirect(pathname);
    }
  }

  const providers = await getProviders();

  return (
    <div className={styles.container}>
      <div className={styles.panel}>
        <div className={styles.header} />
        {providers !== null ? (
          Object.values(providers).map((provider) => (
            <SignInButton key={provider.name} provider={provider} />
          ))
        ) : (
          <div>Uh Oh! Providers ?</div>
        )}
        <div className={styles.footer} />
      </div>
    </div>
  );
}
