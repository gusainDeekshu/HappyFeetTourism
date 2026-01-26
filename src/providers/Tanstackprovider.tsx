'use client'; // Must be a client component

import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export default function TanstackProvider({ children }: { children: React.ReactNode }) {
  // Create a client ensuring it is stable across re-renders
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // Data is fresh for 1 minute
        retry: 1, // Retry failed requests once
      },
    },
  }));

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* DevTools: Helps you debug queries. Removed in production automatically. */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}