'use client';

import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

export interface AuthContextProps {
  children: React.ReactNode;
  session?: Session;
}

async function getSession(cookie: string): Promise<Session> {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/session`, {
    headers: {
      cookie,
    },
  });

  const session = await response.json();

  return Object.keys(session).length > 0 ? session : null;
}

export const helpers = {
  getSession,
};

export function AuthContext({ children, session }: AuthContextProps) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
