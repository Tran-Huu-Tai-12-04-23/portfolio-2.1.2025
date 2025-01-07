/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
interface GitActivityCardProps {
  type: 'untracked' | 'committed' | 'uncommitted';
  title: string;
  subtitle: string;
  date: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export function GitActivityCard({
  type,
  title,
  subtitle,
  date,
  onPrimaryClick = () => {},
  onSecondaryClick = () => {},
}: GitActivityCardProps) {
  const styles = {
    untracked: {
      badge: '',
      label: 'Recently Opened Untracked',
      icon: (
        <svg
          className="h-5 w-5 text-emerald-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
        </svg>
      ),
    },
    committed: {
      badge: ' text-amber-600',
      label: 'Recently Committed Branch',
      icon: (
        <svg
          className="h-5 w-5 text-amber-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2"
          />
        </svg>
      ),
    },
    uncommitted: {
      badge: 'text-gray-600',
      label: 'Active Branches Concept',
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
  };

  const style = styles[type];

  return (
    <div className="w-full space-y-2">
      {/* Card */}
      <div
        onClick={() => {
          onPrimaryClick && onPrimaryClick();
          onSecondaryClick && onSecondaryClick();
        }}
        className="w-full rounded-lg p-4 shadow-sm transition-transform hover:scale-105"
      >
        <div className="flex items-center gap-4">
          {/* Icon */}
          {style.icon}

          {/* Content */}
          <div className="min-w-0 flex-1">
            <h3 className="truncate text-xl font-medium capitalize">{title}</h3>
            <p className="truncate text-sm">Message: {subtitle}</p>
            <p className="truncate text-sm">Created at: {date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
