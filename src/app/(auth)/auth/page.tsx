import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import { getProviders } from 'next-auth/react';

import { authOptions } from '../../../pages/api/auth/[...nextauth]';

import { SignInButton } from './signinButton';

import styles from './page.module.css';

export default async function SignIn({
  searchParams,
}: {
  searchParams: { callbackUrl: string };
}) {
  const session = await getServerSession(authOptions);

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (session) {
    const url = new URL(searchParams.callbackUrl);
    redirect(url.pathname || '/');
  }

  const providers = await getProviders();

  return (
    <div className={styles.container}>
      <div className={styles.panel}>
        {providers !== null ? (
          Object.values(providers).map((provider) => (
            <SignInButton key={provider.name} provider={provider} />
          ))
        ) : (
          <div>Uh Oh! Providers ?</div>
        )}
      </div>
    </div>
  );
}
