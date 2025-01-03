import clsx from 'clsx';
import { m, useReducedMotion } from 'framer-motion';
import Link from 'next/link';

import { DocumentIcon } from '@/components/Icons';

const animation = {
  hide: {
    x: -16,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
};

interface HeaderCtaProps {
  isFree?: boolean;
  isFreeAnimationDuration?: number;
}

function ButtonContactMe() {
  return (
    <div className="fui-button-book-now">
      <Link
        className="btn-link"
        href="/work/contact"
        title="Book Now"
        data-toggle="modal"
        data-target="#modalBookRoom"
      >
        <svg
          width="30"
          height="22"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.0001 1.99991C17.77 1.98385 18.5145 2.27574 19.0684 2.81081C19.6222 3.34589 19.9396 4.07988 19.9501 4.84991V13.1699C19.9343 13.9364 19.6147 14.6653 19.0614 15.1961C18.5081 15.7268 17.7666 16.016 17.0001 15.9999H9.0001C8.66412 16.8496 7.8438 17.4084 6.9301 17.4099H5.0901C4.1708 17.411 3.3433 16.8527 3.0001 15.9999C1.41337 16.011 0.116588 14.7366 0.100098 13.1499V4.84991C0.116588 3.26323 1.41337 1.9888 3.0001 1.99991C3.34493 1.17049 4.15188 0.62727 5.0501 0.619906H6.9301C7.84451 0.605511 8.67418 1.15333 9.0201 1.99991H17.0001ZM1.6001 4.84991V13.1499C1.6244 13.8219 2.13281 14.3769 2.8001 14.4599V3.53991C2.13281 3.62291 1.6244 4.17792 1.6001 4.84991ZM7.6801 15.1499C7.6801 15.5641 7.34431 15.8999 6.9301 15.8999H5.0501C4.85036 15.9026 4.65802 15.8245 4.51677 15.6832C4.37552 15.542 4.29738 15.3496 4.3001 15.1499V2.86991C4.29738 2.67017 4.37552 2.47782 4.51677 2.33658C4.65802 2.19533 4.85036 2.11719 5.0501 2.11991H6.9301C7.34431 2.11991 7.6801 2.45569 7.6801 2.86991V15.1499ZM17.0001 14.4799C17.7488 14.486 18.3678 13.8979 18.4001 13.1499V4.84991C18.3891 4.08614 17.7639 3.47433 17.0001 3.47991H9.1801V14.4799H17.0001Z"
            fill="currentColor"
          />
          <path
            d="M16.8401 5.12991H10.4901C10.0759 5.12991 9.7401 5.46569 9.7401 5.87991C9.7401 6.29412 10.0759 6.62991 10.4901 6.62991H16.8401C17.2543 6.62991 17.5901 6.29412 17.5901 5.87991C17.5901 5.46569 17.2543 5.12991 16.8401 5.12991Z"
            fill="currentColor"
          />
          <path
            d="M11.6901 8.99991C11.6901 9.38098 11.3812 9.68991 11.0001 9.68991C10.619 9.68991 10.3101 9.38098 10.3101 8.99991C10.3101 8.61883 10.619 8.30991 11.0001 8.30991C11.3812 8.30991 11.6901 8.61883 11.6901 8.99991Z"
            fill="currentColor"
          />
          <path
            d="M11.6901 12.1199C11.6901 12.501 11.3812 12.8099 11.0001 12.8099C10.619 12.8099 10.3101 12.501 10.3101 12.1199C10.3101 11.7388 10.619 11.4299 11.0001 11.4299C11.3812 11.4299 11.6901 11.7388 11.6901 12.1199Z"
            fill="currentColor"
          />
          <path
            d="M13.6601 8.30991C13.2804 8.31541 12.9765 8.62673 12.9801 9.00648C12.9838 9.38622 13.2936 9.69163 13.6734 9.68983C14.0531 9.68802 14.3601 9.37967 14.3601 8.99991C14.3601 8.81516 14.286 8.63812 14.1545 8.50843C14.0229 8.37874 13.8448 8.30723 13.6601 8.30991Z"
            fill="currentColor"
          />
          <path
            d="M13.6601 11.4199C13.377 11.4199 13.1217 11.5905 13.0134 11.852C12.905 12.1136 12.9649 12.4147 13.1651 12.6149C13.3653 12.8151 13.6664 12.875 13.928 12.7666C14.1895 12.6583 14.3601 12.403 14.3601 12.1199C14.3628 11.9334 14.2899 11.7538 14.1581 11.6219C14.0262 11.4901 13.8466 11.4172 13.6601 11.4199Z"
            fill="currentColor"
          />
          <path
            d="M16.3301 8.30991C16.0493 8.30177 15.7917 8.46462 15.6785 8.7217C15.5654 8.97879 15.6194 9.27879 15.8151 9.48029C16.0107 9.6818 16.309 9.74459 16.5693 9.63907C16.8296 9.53355 17 9.28078 17.0001 8.99991C17.0003 8.62651 16.7033 8.32073 16.3301 8.30991Z"
            fill="currentColor"
          />
          <path
            d="M16.3301 11.4199C16.0461 11.4158 15.7878 11.5838 15.6763 11.845C15.5648 12.1063 15.6222 12.409 15.8216 12.6112C16.021 12.8135 16.3228 12.8753 16.5856 12.7675C16.8484 12.6598 17.0201 12.4039 17.0201 12.1199C17.0228 11.9352 16.9513 11.7571 16.8216 11.6255C16.6919 11.494 16.5148 11.4199 16.3301 11.4199Z"
            fill="currentColor"
          />
        </svg>
        Get in touch
      </Link>
    </div>
  );
}

function ButtonResume() {
  return (
    <a
      target="_blank"
      rel="noreferrer nofollow"
      href="https://www.figma.com/community/file/1176377524040948926"
      className={clsx('button button--ghost px-2', 'md:button--big md:px-2')}
    >
      <DocumentIcon className={clsx('h-5 w-5')} />
      RESUME
    </a>
  );
}

function AvailableForHire() {
  return (
    <div
      className={clsx(
        'button button--ghost text-accent-500 pointer-events-none gap-2.5 px-2.5',
        'md:button--big md:px-2.5',
        'dark:text-accent-400'
      )}
    >
      <span className={clsx('relative flex h-2 w-2')}>
        <span
          className={clsx(
            'bg-accent-600 absolute -left-1 -top-1 inline-flex h-4 w-4 animate-ping rounded-full opacity-75',
            'dark:bg-accent-300'
          )}
        />
        <span
          className={clsx(
            'bg-accent-500 relative inline-flex h-2 w-2 rounded-full',
            'dark:bg-accent-400'
          )}
        />
      </span>
      AVAILABLE FOR HIRE
    </div>
  );
}

function HeaderCta({
  isFree = true,
  isFreeAnimationDuration = 4,
}: HeaderCtaProps) {
  const shouldReduceMotion = useReducedMotion();

  let isFreeVariants = {
    hide: {
      x: 0,
      opacity: 1,
    },
    show: {
      x: -48,
      opacity: 0,
    },
  };

  if (shouldReduceMotion) {
    isFreeVariants = {
      hide: {
        x: 0,
        opacity: 1,
      },
      show: {
        x: 0,
        opacity: 0,
      },
    };
  }

  return (
    <m.div className={clsx('flex gap-2')} initial="hide" animate="show">
      <m.div
        className={clsx('relative z-20')}
        variants={animation}
        transition={{ delay: 0.4 }}
      >
        <ButtonContactMe />
      </m.div>
      {isFree ? (
        <m.div
          variants={animation}
          transition={{ delay: 2.8 }}
          className={clsx('relative z-10')}
        >
          <m.div
            variants={isFreeVariants}
            transition={{ delay: isFreeAnimationDuration + 1.5, duration: 0.4 }}
          >
            <AvailableForHire />
          </m.div>
          <m.div
            className={clsx('absolute left-0 top-0')}
            initial={{ x: -48, opacity: 0, pointerEvents: 'none' }}
            animate={{ x: 0, opacity: 1, pointerEvents: 'auto' }}
            transition={{ delay: isFreeAnimationDuration + 1.6, duration: 0.4 }}
          >
            <ButtonResume />
          </m.div>
        </m.div>
      ) : (
        <m.div variants={animation} transition={{ delay: 0.5 }}>
          <ButtonResume />
        </m.div>
      )}
    </m.div>
  );
}

export default HeaderCta;
