'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { CustomCursor } from '@/components/CustomCursor';
import { SmoothScroll } from '@/components/SmoothScroll';
import { BookACallProvider } from '@/context/BookACallContext';

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = Boolean(pathname?.startsWith('/admin'));

  useEffect(() => {
    if (isAdmin) {
      document.body.classList.add('admin-mode');
    } else {
      document.body.classList.remove('admin-mode');
    }

    return () => {
      document.body.classList.remove('admin-mode');
    };
  }, [isAdmin]);

  if (isAdmin) {
    return <div className="admin-root w-full min-h-screen">{children}</div>;
  }

  return (
    <BookACallProvider>
      <SmoothScroll>
        <Nav />
        <main className="overflow-x-hidden w-full">{children}</main>
        <Footer />
        <CustomCursor />
      </SmoothScroll>
    </BookACallProvider>
  );
}
