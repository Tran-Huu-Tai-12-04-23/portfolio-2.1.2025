/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import clsx from 'clsx';

import { SkeletonMd } from '@/components/wireframes/Skeletons';

import { IProject } from '@/assets/data';
import { AnimateModalProjectDetail } from '@/contents/projects/ModalDetail';

import type { PropsWithChildren, ReactNode } from 'react';

interface BrowserTabProps {
  icon: ReactNode;
  title: string;
  isActive: boolean;
  action: () => void;
}

function BrowserTab({ icon, title, isActive, action }: BrowserTabProps) {
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      onClick={() => {
        console.log('CLICK');
        action();
      }}
      className={clsx('flex h-6 items-center truncate rounded-lg', [
        isActive
          ? [
              'bg-slate-200 text-slate-600',
              'dark:bg-slate-100/20 dark:text-slate-300',
            ]
          : ['bg-slate-200/50 text-slate-500', 'dark:bg-slate-100/5'],
      ])}
      style={{ width: 200 }}
    >
      <div
        onClick={() => {
          action();
        }}
        className={clsx('flex w-full gap-2 px-2 text-xs')}
      >
        {icon}
        <div className={clsx('flex-1 truncate')}>{title}</div>
      </div>
    </div>
  );
}

interface AppWindowProps {
  type?: 'browser' | 'app';
  browserTabs?: Array<BrowserTabProps>;
  currentPro: IProject;
}

function AppWindow({
  children = null,
  type = 'app',
  browserTabs = [],
  currentPro,
}: PropsWithChildren<AppWindowProps>) {
  const isWithBrowserTabs = type === 'browser' && browserTabs;

  return (
    <div
      role="presentation"
      className={clsx(
        'border-divider-light flex h-full w-full select-none flex-col overflow-hidden rounded-xl border bg-white',
        'dark:border-divider-dark dark:bg-[#0c1222]'
      )}
    >
      <div
        className={clsx(
          'border-divider-light relative box-border border-b',
          'dark:border-divider-dark',
          [isWithBrowserTabs ? 'h-20' : 'h-10']
        )}
      >
        <div
          className={clsx(
            'absolute left-4 top-0 flex h-10 items-center gap-1.5'
          )}
        >
          <div className={clsx('h-3 w-3 rounded-full bg-red-300')} />
          <div
            className={clsx(
              'h-3 w-3 rounded-full bg-amber-300',
              'dark:bg-slate-500'
            )}
          />
          <AnimateModalProjectDetail currentPro={currentPro}>
            <div
              onClick={() => {}}
              className={clsx(
                'h-3 w-3 rounded-full bg-green-300 hover:bg-green-600'
              )}
            />
          </AnimateModalProjectDetail>
        </div>
        {type === 'browser' && (
          <>
            <div className={clsx('flex h-10 items-center justify-center')}>
              <SkeletonMd w={160} />
            </div>
            {isWithBrowserTabs && (
              <div className={clsx('mt-2 flex gap-2 px-3')}>
                {browserTabs.map(({ icon, title, isActive, action }) => (
                  <BrowserTab
                    key={title}
                    icon={icon}
                    title={title}
                    isActive={isActive}
                    action={action}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
      <div className={clsx('flex-1 overflow-hidden')}>{children}</div>
    </div>
  );
}

export default AppWindow;
