import clsx from 'clsx';
import dynamic from 'next/dynamic';

import { CodeIcon, HeartIcon, SparklesIcon } from '@/components/Icons';

import { useTranslate } from '@/hooks/useTranslate';

import FeaturedCard from '@/contents/index/FeaturedCard';

import DailyCommit from './DailyCommit';
import { GithubOrgs } from './GithubOrgs';
import GithubRepoLst from './GithubRepoLst';

const Header = dynamic(() => import('@/contents/index/Header'), {
  ssr: false,
});

function FeaturedCardSection() {
  const { t } = useTranslate();
  return (
    <div className={clsx('content-wrapper')}>
      <div className={clsx('flex flex-col gap-4', 'lg:flex-row lg:gap-8')}>
        <FeaturedCard
          icon={
            <div
              className={clsx(
                'rounded-full bg-amber-300 p-3.5',
                'dark:bg-amber-900'
              )}
            >
              <SparklesIcon className={clsx('h-5 w-5 text-white')} />
            </div>
          }
          title={t('home.cleanAIntuitive')}
          desc={t('home.cleanInDesc')}
        />
        <FeaturedCard
          icon={
            <div
              className={clsx(
                'rounded-full bg-pink-300 p-3.5',
                'dark:bg-pink-900'
              )}
            >
              <HeartIcon className={clsx('h-5 w-5 text-white')} />
            </div>
          }
          title={t('home.oriented')}
          desc={t('home.orientedDesc')}
        />
        <FeaturedCard
          icon={
            <div
              className={clsx(
                'rounded-full bg-sky-300 p-3.5',
                'dark:bg-sky-900'
              )}
            >
              <CodeIcon className={clsx('h-5 w-5 text-white')} />
            </div>
          }
          title={t('home.optimized')}
          desc={t('home.optimizedDesc')}
        />
      </div>
    </div>
  );
}

function IndexContents() {
  return (
    <>
      <Header />
      <div className={clsx('hidden', 'lg:-mt-16 lg:mb-24 lg:block')}>
        <DailyCommit />
      </div>
      <div className={clsx('hidden', 'lg:-mt-16 lg:mb-24 lg:block')}>
        <FeaturedCardSection />
      </div>
      <section className={clsx('mb-12')}>
        <GithubOrgs />
      </section>
      <section className={clsx('mb-12')}>
        <GithubRepoLst />
      </section>
    </>
  );
}

export default IndexContents;
