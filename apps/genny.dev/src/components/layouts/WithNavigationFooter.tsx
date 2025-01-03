import dynamic from 'next/dynamic';

import Footer from '@/components/Footer';
import QuickAccess from '@/components/QuickAccess';
import Shortcuts from '@/components/Shortcuts';
import Toaster from '@/components/Toaster';

import type { PropsWithChildren } from 'react';

const Navigation = dynamic(() => import('@/components/Navigation'), {
  ssr: false,
});

function WithNavigationFooter({ children }: PropsWithChildren) {
  return (
    <>
      <QuickAccess />
      <Shortcuts />
      <Navigation />
      <main>{children}</main>
      <Toaster />
      <Footer />
    </>
  );
}

export default WithNavigationFooter;
