/* eslint-disable react/no-array-index-key */
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

import { getReposWithCommitsToday } from '@/services/git.service';

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

function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className={clsx('content-wrapper')}>
      <div className={clsx('flex flex-col gap-4', 'lg:flex-row lg:gap-8')}>
        {children}
      </div>
    </div>
  );
}
// eslint-disable-next-line react/function-component-definition
const DailyCommit: React.FC = () => {
  const [reposWithCommits, setReposWithCommits] = useState<RepoWithCommits[]>(
    []
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const data = await getReposWithCommitsToday();
        setReposWithCommits(data);
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
        <div>Loading...</div>
      </Wrapper>
    );
  }

  if (error) {
    return (
      <Wrapper>
        <div>{error}</div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="daily-commit">
        <h2>Daily Commits</h2>
        {reposWithCommits.length === 0 ? (
          <p>No commits found for today.</p>
        ) : (
          reposWithCommits.map((repo) => (
            <div key={repo.repo} className="repo">
              <h3>{repo.repo}</h3>
              <ul>
                {repo.commits.map((commit, index) => (
                  <li key={index}>
                    <a
                      href={commit.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {commit.message}
                    </a>
                    <p>
                      <strong>Author:</strong> {commit.author}
                    </p>
                    <p>
                      <strong>Date:</strong>{' '}
                      {new Date(commit.date).toLocaleString()}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
    </Wrapper>
  );
};

export default DailyCommit;
