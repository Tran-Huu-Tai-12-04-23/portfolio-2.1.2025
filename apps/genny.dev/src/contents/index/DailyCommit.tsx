import clsx from 'clsx';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

import { getReposWithCommitsToday } from '@/services/git.service';

import { GitActivityCard } from './git-ac-card';

interface Commit {
  message: string;
  url: string;
  date: string;
  author: string;
}

interface RepoWithCommits {
  repo: string;
  commits: Commit[];
}

// eslint-disable-next-line react/prop-types
function Wrapper({ children }) {
  return (
    <div className={clsx('content-wrapper')}>
      <div className={clsx('mt-10 flex flex-col gap-4')}>
        <div className="text-xl font-bold">Recently activity on my github</div>
        {children}
      </div>
    </div>
  );
}

export default function DailyCommit() {
  const [reposWithCommits, setReposWithCommits] = useState<RepoWithCommits>({
    repo: '',
    commits: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const data = await getReposWithCommitsToday();
        setReposWithCommits(data?.length > 0 ? data[0] : {});
      } catch (err) {
        setError('Error fetching commits');
      } finally {
        setLoading(false);
      }
    };

    fetchCommits();
  }, []);

  if (loading) {
    return (
      <Wrapper>
        <div>
          {[...Array(1)].map((_, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={i} className="animate-pulse">
              <div className="mb-2 h-6 w-40 rounded-full" />
              <div className="h-20 rounded-lg" />
            </div>
          ))}
        </div>
      </Wrapper>
    );
  }

  if (error) {
    return (
      <Wrapper>
        <GitActivityCard
          type="uncommitted"
          title="Error"
          subtitle={error}
          date=""
          onPrimaryClick={() => window.location.reload()}
        />
      </Wrapper>
    );
  }

  if (reposWithCommits?.commits.length === 0) {
    return (
      <Wrapper>
        <GitActivityCard
          type="untracked"
          title="No Activity"
          subtitle="No commits found for today"
          date=""
        />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="w-full space-y-4">
        {reposWithCommits?.commits &&
          reposWithCommits?.commits?.map((repo, index) => (
            // const isMultipleCommits = repo.commits.length > 1;
            // const latestCommit = repo.commits[0];

            <GitActivityCard
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              type="committed"
              title={repo.message}
              subtitle={repo.author}
              date={dayjs(repo.date).format('DD/MM/YYYY HH:mm')}
              onPrimaryClick={() => window.open(repo.url, '_blank')}
            />
          ))}
      </div>
    </Wrapper>
  );
}
