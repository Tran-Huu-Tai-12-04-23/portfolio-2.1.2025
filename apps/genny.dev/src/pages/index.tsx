import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Head from '@/components/meta/Head';

import { getBaseUrl } from '@/helpers/url';

import IndexContents from '@/contents/index';

import type { GetStaticProps } from 'next';

type Props = {
  // Add custom props here
};
function Index() {
  return (
    <>
      <Head
        title="Genny Dev · Fullstack Developer"
        description="An online portfolio featuring a showcase of my projects and some thoughts as a Fullstack Developer who loves intuitive, clean and modern UI design."
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
