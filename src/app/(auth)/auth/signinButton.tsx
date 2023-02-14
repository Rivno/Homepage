'use client';

import { ClientSafeProvider, signIn } from 'next-auth/react';

import LogoGithub from '../../../../public/cv/companies/github.svg';

const logos = new Map();
logos.set('github', LogoGithub);

export function SignInButton({ provider }: { provider: ClientSafeProvider }) {
  const Logo = logos.get(provider.name.toLowerCase());

  return (
    <div key={provider.name}>
      <button onClick={() => signIn(provider.id)}>
        <span>
          <Logo />
        </span>
        <span>Sign in with {provider.name}</span>
      </button>
    </div>
  );
}
