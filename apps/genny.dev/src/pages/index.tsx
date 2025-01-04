/* eslint-disable import/no-extraneous-dependencies */
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Head from '@/components/meta/Head';

import { useTranslate } from '@/hooks/useTranslate';

import { getBaseUrl } from '@/helpers/url';

import IndexContents from '@/contents/index';

import type { GetStaticProps } from 'next';

type Props = {
  // Add custom props here
};
function Index() {
  const { t } = useTranslate();
  return (
    <>
      <Head
        title={t('meta.title')}
        description={t('meta.description')}
        ogImage={`${getBaseUrl()}/assets/images/og-image.png`}
        overrideTitle
      />
      <IndexContents />
    </>
  );
}
export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common', 'home'])),
  },
});

export default Index;
