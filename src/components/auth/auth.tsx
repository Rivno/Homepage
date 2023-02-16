'use client';

// import { getServerSession } from 'next-auth/next';
import { useSession } from 'next-auth/react';

import { SignIn, SignOut } from './actions';

import styles from './auth.module.css';

export function Auth() {
  // const session = await getServerSession();
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      {session?.user ? (
        <>
          {session.user.image && (
            <span
              style={{ backgroundImage: `url('${session.user.image}')` }}
              className={styles.avatar}
            />
          )}
          <SignOut />
          <div className={styles.signAs}>
            <span>Signed in as</span>
            <span>{session.user.email ?? session.user.name}</span>
          </div>
        </>
      ) : (
        <SignIn />
      )}
    </div>
  );
}
