'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export const ReactQuery = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
