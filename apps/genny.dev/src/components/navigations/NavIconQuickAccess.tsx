import clsx from 'clsx';

import { QuickAccessIcon } from '@/components/Icons';
import Kbd from '@/components/Kbd';

import useGlobal from '@/hooks/useGlobal';
import { useTranslate } from '@/hooks/useTranslate';

function NavIconQuickAccess() {
  const { setQuickAccessOpen } = useGlobal();

  const { t } = useTranslate();
  return (
    <button
      type="button"
      className={clsx(
        'ml-1 flex h-9 w-9 items-center justify-center gap-2 rounded-xl bg-slate-300/50 text-slate-800',
        'xl:w-auto xl:px-3',
        'hover:bg-slate-300/70 sm:ml-0',
        'dark:bg-slate-800/50 dark:text-slate-100 dark:hover:bg-slate-700/50'
      )}
      aria-label={t('actionCenter.openQuickAccess')}
      title={t('actionCenter.openQuickAccess')}
      onClick={() => {
        setQuickAccessOpen(true);
      }}
    >
      <QuickAccessIcon className={clsx('h-5 w-5')} />
      <div
        className={clsx(
          'hidden items-center gap-2 text-xs font-bold',
          'xl:flex',
          'dark:font-normal'
        )}
      >
        {t('header.quickAccess')}
        <Kbd>Q</Kbd>
      </div>
    </button>
  );
}

export default NavIconQuickAccess;
