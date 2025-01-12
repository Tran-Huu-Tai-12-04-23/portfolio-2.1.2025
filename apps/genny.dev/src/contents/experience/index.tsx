import clsx from 'clsx';

import Contents from '@/contents/Experience/Contents.mdx';

function ExperienceContents() {
  return (
    <div className={clsx('content-wrapper mdx-contents')}>
      <Contents />
    </div>
  );
}

export default ExperienceContents;
