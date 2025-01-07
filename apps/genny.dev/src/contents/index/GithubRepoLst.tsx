import clsx from 'clsx';
import { useEffect, useState } from 'react';

import Pagination from '@/components/pagination';
import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';
import UserCommitChart from '@/components/user-chart-commit';

import TodoItem from '@/contents/index/Cards/TodoItem';

import type { TodoItemState } from '@/contents/index/Cards/TodoItem';

type Content = {
  state: TodoItemState;
  shows: Array<TodoItemState>;
  title: string;
  description: string;
};

export interface IContent {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: Owner;
  html_url: string;
  description: any;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: any;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  forks_count: number;
  mirror_url: any;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: any;
  allow_forking: boolean;
  is_template: boolean;
  web_commit_signoff_required: boolean;
  topics: any[];
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
}

export interface Owner {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  user_view_type: string;
  site_admin: boolean;
}

function GithubRepoLst() {
  const [currentState, setCurrentState] = useState<IContent | null>(null);
  const [data, setData] = useState<IContent[]>([]);
  const [repoState, setRepoState] = useState({
    private: 0,
    public: 0,
    total: 0,
  });
  const [paginationState, setPaginationState] = useState({
    min: 1,
    max: 1,
    currentPage: 1,
  });
  const owner = 'Tran-Huu-Tai-12-04-23'; // Tên người dùng
  const repo = 'course-edu-api'; // Tên repo
  const token =
    process.env.GITHUB_TOKEN ||
    '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';

  useEffect(() => {
    fetch('https://api.github.com/users/tran-huu-tai-12-04-23/repos')
      .then((res) => res.json())
      .then((resData) => {
        setData(resData);
        setCurrentState(resData[0]);
        setPaginationState({
          min: 1,
          max: Math.ceil(resData.length / 3),
          currentPage: 1,
        });
        fetch('https://api.github.com/user/repos', {
          headers: {
            Authorization: `token ${token}`,
          },
        })
          .then((res) => res.json())
          .then((resData2) => {
            if (resData2) {
              const lstData = [...resData, ...resData2];
              setData(lstData);
              setRepoState({
                private: resData2?.length,
                public: resData?.length,
                total: lstData?.length,
              });
              setCurrentState(resData[0]);
              setPaginationState({
                min: 1,
                max: Math.ceil(lstData.length / 3),
                currentPage: 1,
              });
            }
          });
      });
  }, [token]);

  return (
    <>
      <header className={clsx('mb-8')}>
        <SectionTitle
          title="My github repo"
          caption="Coding & Learning"
          description="Keep the User Interface clean with a modern touch without compromising the User Experience."
        />
        <div
          className={clsx(
            'content-wrapper justify-startpb-20 flex items-center'
          )}
        >
          <div className="mt-2 flex items-center justify-start gap-2">
            <div
              className={clsx([
                'rounded-full bg-yellow-100 p-2 pl-4 pr-4 text-yellow-700',
                'dark:bg-yellow-500/20 dark:text-yellow-300',
              ])}
            >
              Total Private Repo: {repoState.private}
            </div>
            <div
              className={clsx([
                'rounded-full bg-blue-100 p-2 pl-4 pr-4 text-blue-700',
                'dark:bg-blue-500/20 dark:text-blue-300',
              ])}
            >
              Total Public Repo: {repoState.public}
            </div>
            <div
              className={clsx([
                'rounded-full bg-green-100 p-2 pl-4 pr-4 text-green-700',
                'dark:bg-green-500/20 dark:text-green-300',
              ])}
            >
              Total Repo: {repoState.total}
            </div>
          </div>
        </div>
      </header>
      <SectionContent>
        <div className={clsx('flex', 'lg:gap-12')}>
          <div
            className={clsx('-mt-8 hidden flex-1 flex-col gap-3', 'lg:flex')}
          >
            {data
              ?.slice(
                (paginationState.currentPage - 1) * 3,
                paginationState.currentPage * 3
              )
              .map((item, i) => (
                <SectionButton
                  key={item.id}
                  title={item.name}
                  description={item.description}
                  icon={i + 1}
                  active={item.id === currentState?.id}
                  onClick={() => {
                    setCurrentState(item);
                  }}
                />
              ))}
          </div>
          <div
            className={clsx('relative flex flex-1 items-center justify-center')}
          >
            <div
              className={clsx('-mt-8 flex gap-4', 'md:gap-6 lg:top-8 lg:mt-0')}
            >
              <div>
                <TodoItem
                  data={currentState}
                  state={['typography', 'spacing', 'colors', 'effects']}
                  title={currentState?.name}
                  description={currentState?.description}
                  date="10:00 AM · Tomorrow"
                  tag1="Design"
                  tag2="Components"
                />
              </div>
              <div className={clsx('hidden', 'sm:block lg:hidden')}>
                <TodoItem
                  data={currentState}
                  state={['typography', 'spacing', 'colors', 'effects']}
                  title={currentState?.name}
                  description={currentState?.description}
                  date="10:00 AM · Tomorrow"
                  tag1="Design"
                  tag2="Components"
                />
              </div>
            </div>
          </div>
        </div>
      </SectionContent>
      <div
        className={clsx('content-wrapper mb-4 flex items-center justify-start')}
      >
        <UserCommitChart
          owner={owner}
          repo={currentState?.name || repo}
          token={token}
        />
      </div>

      <div className={clsx('content-wrapper flex items-center justify-center')}>
        <Pagination
          min={paginationState.min}
          max={paginationState.max}
          currentPage={paginationState.currentPage}
          onSetPage={(page) => {
            setPaginationState((prevState) => ({
              ...prevState,
              currentPage: page,
            }));
          }}
        />
      </div>
    </>
  );
}

export default GithubRepoLst;
