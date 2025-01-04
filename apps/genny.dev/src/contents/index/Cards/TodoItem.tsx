import clsx from 'clsx';
import dayjs from 'dayjs';
import Image from 'next/image';

import { CalendarIcon } from '@/components/Icons';
import { LinkPreview } from '@/components/link-preview';

import { IContent } from '../GithubRepoLst';

export type TodoItemState = 'spacing' | 'typography' | 'colors' | 'effects';

interface TodoItemProps {
  state: Array<TodoItemState>;
  title?: string;
  description?: string;
  date?: string;
  tag1?: string;
  tag2?: string;
  data: IContent;
}

function TodoItem({
  state,
  title = 'Create Documentations',
  description = 'It is good to create early documentation for our new library.',
  date = '10:00 AM · Tomorrow',
  tag1 = 'Docs',
  tag2 = 'Support',
  data,
}: TodoItemProps) {
  return (
    <div
      className={clsx(
        'w-full select-none border p-6',
        'lg:w-96',
        state.includes('effects') && ['rounded-xl'],
        state.includes('spacing') && [''],
        state.includes('typography') ? ['text-sm'] : ['font-serif'],
        state.includes('colors')
          ? [
              'border-divider-light bg-white',
              'dark:border-divider-dark dark:bg-slate-900',
            ]
          : ['border-black bg-white', 'dark:border-white dark:bg-[#050914]']
      )}
      role="presentation"
    >
      <div
        className={clsx(
          'flex items-center',
          state.includes('spacing') && ['mb-4 justify-between']
        )}
      >
        <Image
          src={data?.owner?.avatar_url}
          alt={title}
          width={40}
          height={40}
          className="scale-125 rounded-full"
        />
        <div
          className={clsx(
            state.includes('effects') && ['rounded-full'],
            state.includes('spacing') && ['px-2 py-0.5'],
            state.includes('typography') && ['text-xs font-bold'],
            !data?.private
              ? [
                  'bg-green-100 text-green-800',
                  'dark:bg-green-500/20 dark:text-green-300',
                ]
              : [
                  'bg-red-100 text-red-800',
                  'dark:bg-red-500/20 dark:text-red-300',
                ]
          )}
        >
          {data?.private ? 'Private' : 'Public'}
        </div>
      </div>
      <div
        className={clsx(
          state.includes('spacing') && ['mb-1'],
          state.includes('typography') && ['text-lg font-bold'],
          state.includes('colors')
            ? ['text-slate-700', 'dark:text-slate-300']
            : ['text-black', 'dark:text-white'],
          'capitalize'
        )}
      >
        {title}
      </div>
      <div
        className={clsx(
          state.includes('spacing') && ['mb-4'],
          state.includes('typography') && [''],
          state.includes('colors')
            ? ['text-slate-600', 'dark:text-slate-400']
            : ['text-black', 'dark:text-white']
        )}
      >
        {description}
      </div>
      <div
        className={clsx(
          'flex',
          state.includes('spacing') && ['mb-6 gap-2'],
          state.includes('typography') && ['text-xs font-bold'],
          state.includes('colors') && ['']
        )}
      >
        <div
          className={clsx(
            state.includes('effects') && ['rounded-full'],
            state.includes('spacing') && ['px-2 py-0.5'],
            state.includes('typography') && [''],
            state.includes('colors')
              ? [
                  'bg-blue-100 text-blue-700',
                  'dark:bg-blue-500/20 dark:text-blue-300',
                ]
              : ['bg-[#0000ff] text-white']
          )}
        >
          {tag1}
        </div>
        <div
          className={clsx(
            state.includes('effects') && ['rounded-full'],
            state.includes('spacing') && ['px-2 py-0.5'],
            state.includes('typography') && [''],
            state.includes('colors')
              ? [
                  'bg-yellow-100 text-yellow-700',
                  'dark:bg-yellow-500/20 dark:text-yellow-300',
                ]
              : ['bg-[#ffff00] text-black']
          )}
        >
          {tag2}
        </div>
      </div>
      REPO:{' '}
      <div
        className={clsx(
          'flex items-center',
          state.includes('spacing') && ['gap-1'],
          state.includes('typography') && ['text-xs font-medium'],
          state.includes('colors') && ['']
        )}
      >
        {data?.html_url ? (
          <LinkPreview
            url={data.html_url}
            imageSrc={data.html_url}
            isStatic
            className="font-bold"
          >
            {data.html_url}
          </LinkPreview>
        ) : (
          'No repository available'
        )}
      </div>
      <div
        className={clsx(
          'flex items-center',
          state.includes('spacing') && ['gap-1'],
          state.includes('typography') && ['text-xs font-medium'],
          state.includes('colors') && [''],
          'mt-5'
        )}
      >
        Ngày tạo:{' '}
        <CalendarIcon
          className={clsx(
            'h-4 w-4',
            state.includes('spacing') && ['-mt-1'],
            state.includes('typography') && [''],
            state.includes('colors')
              ? ['text-slate-400', 'dark:text-slate-600']
              : ['h-4 w-4 text-black', 'dark:text-white']
          )}
        />
        <div
          className={clsx(
            state.includes('spacing') && [''],
            state.includes('typography') && [''],
            state.includes('colors')
              ? ['text-slate-600', 'dark:text-slate-400']
              : ['text-black', 'dark:text-white']
          )}
        >
          {dayjs(data?.created_at).format('DD/MM/YYYY')}
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
