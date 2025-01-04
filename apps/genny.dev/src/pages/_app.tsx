/* eslint-disable import/no-extraneous-dependencies */
import { GoogleAnalytics } from '@next/third-parties/google';
import { appWithTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import RootLayout from '@/components/layouts/Root';
import WithNavigationFooter from '@/components/layouts/WithNavigationFooter';
import Provider from '@/providers';

import type { GetStaticProps, NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';

import '@/styles/main.css';

/// load static translations
export const getStaticProps: GetStaticProps<any> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common', 'home'])),
  },
});

type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function getDefaultLayout(page: ReactElement): ReactNode {
  return <WithNavigationFooter>{page}</WithNavigationFooter>;
}

function App({ Component, pageProps, router }: AppPropsWithLayout) {
  let getLayout;

  if (router.query.simpleLayout) {
    getLayout = (page: ReactElement) => <main>{page}</main>;
  } else if (Component.getLayout) {
    getLayout = Component.getLayout;
  } else {
    getLayout = getDefaultLayout;
  }

  return (
    <Provider>
      <RootLayout>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {getLayout(<Component {...pageProps} />)}
        <GoogleAnalytics gaId="G-FB9QLDNKNN" />
      </RootLayout>
    </Provider>
  );
}

export default appWithTranslation(App);
