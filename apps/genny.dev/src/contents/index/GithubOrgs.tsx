import clsx from 'clsx';
import { useEffect, useState } from 'react';

import { AnimatedTestimonials } from '@/components/animates-ui/testimonials';

export function GithubOrgs() {
  const [data, setData] = useState([]);

  const token = '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';

  useEffect(() => {
    fetch('https://api.github.com/user/orgs', {
      headers: {
        Authorization: `token ${token}`,
      },
    })
      .then((res) => res.json())
      .then((resData) => {
        setData(resData);
      });
  }, [token]);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <div className="container mx-auto px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <h1 className={clsx('font-mono text-3xl font-semibold')}>
        My organization at github
      </h1>
      {data?.length > 0 && <AnimatedTestimonials testimonials={data} />}
    </div>
  );
}
