/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable simple-import-sort/imports */

import Footer from '@/components/Footer';
import QuickAccess from '@/components/QuickAccess';
import Shortcuts from '@/components/Shortcuts';
import Toaster from '@/components/Toaster';

import type { PropsWithChildren } from 'react';
import Navigation from '../Navigation';

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
