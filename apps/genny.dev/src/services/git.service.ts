// eslint-disable-next-line import/no-extraneous-dependencies
import 'dotenv/config';

const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN; // Use environment variable for GitHub token
// Thay bằng GitHub token của bạn
const username = 'Tran-Huu-Tai-12-04-23'; // Thay bằng username GitHub của bạn
if (!token) {
  console.error('GitHub token is missing');
  throw new Error('GitHub token is missing');
}
// eslint-disable-next-line consistent-return
const getReposWithCommitsToday = async () => {
  const today = new Date().toISOString().split('T')[0];

  try {
    // Lấy danh sách repo của bạn
    const reposResponse = await fetch(
      `https://api.github.com/users/${username}/repos`,
      {
        headers: { Authorization: `token ${token}` },
      }
    );

    if (!reposResponse.ok) {
      throw new Error(
        `Error fetching repositories: ${reposResponse.statusText}`
      );
    }

    const repos = await reposResponse.json();
    const reposWithCommits = [];

    // eslint-disable-next-line no-restricted-syntax
    for (const repo of repos) {
      const commitsUrl = `https://api.github.com/repos/${username}/${repo.name}/commits`;

      try {
        // eslint-disable-next-line no-await-in-loop
        const commitsResponse = await fetch(commitsUrl, {
          headers: { Authorization: `token ${token}` },
        });

        if (!commitsResponse.ok) {
          throw new Error(
            `Error fetching commits for ${repo.name}: ${commitsResponse.statusText}`
          );
        }

        // eslint-disable-next-line no-await-in-loop
        const commits = await commitsResponse.json();

        // Lọc các commit trong hôm nay
        const todayCommits = commits.filter((commit) =>
          commit.commit.author.date.startsWith(today)
        );

        if (todayCommits.length > 0) {
          reposWithCommits.push({
            repo: repo.name,
            commits: todayCommits.map((commit) => ({
              message: commit.commit.message,
              url: commit.html_url,
              date: commit.commit.author.date,
              author: commit.commit.author.name,
            })),
          });
        }
      } catch (err) {
        console.log(`Error fetching commits for ${repo.name}:`, err.message);
      }
    }

    console.log('Repositories with commits today:', reposWithCommits);
    return reposWithCommits;
  } catch (error) {
    console.log('Error fetching repositories:', error.message);
  }
};

// eslint-disable-next-line consistent-return
const fetchUserCommits = async (owner, repo) => {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/commits`,
      {
        headers: {
          Authorization: `token ${token}`,
        },
      }
    );

    const commits = await response.json();

    // Lọc commit của riêng bạn
    const userCommits = commits.filter(
      (commit) => commit.author?.login === owner
    );

    // Tính toán số commit mỗi ngày
    const commitCounts: { [key: string]: number } = {};
    userCommits.forEach((commit) => {
      const date = new Date(commit.commit.author.date).toLocaleDateString();
      commitCounts[date] = (commitCounts[date] || 0) + 1;
    });

    return {
      labels: Object.keys(commitCounts),
      data: Object.values(commitCounts),
    };
  } catch (error) {
    console.error('Error fetching commits:', error);
  }
};

const getRepoLst = async () => {
  try {
    const userReposResponse = await fetch(
      `https://api.github.com/users/${username}/repos`,
      {
        headers: {
          Authorization: `token ${token}`,
        },
      }
    );

    if (!userReposResponse.ok) {
      throw new Error(
        `Error fetching user repositories: ${userReposResponse.statusText}`
      );
    }

    const userRepos = await userReposResponse.json();

    const authenticatedReposResponse = await fetch(
      'https://api.github.com/user/repos',
      {
        headers: {
          Authorization: `token ${token}`,
        },
      }
    );

    if (!authenticatedReposResponse.ok) {
      throw new Error(
        `Error fetching authenticated user repositories: ${authenticatedReposResponse.statusText}`
      );
    }

    const authenticatedRepos = await authenticatedReposResponse.json();

    const allRepos = [...userRepos, ...authenticatedRepos];

    return {
      private: authenticatedRepos.length,
      public: userRepos.length,
      total: allRepos.length,
      repos: allRepos,
      paginationState: {
        min: 1,
        max: Math.ceil(allRepos.length / 3),
        currentPage: 1,
      },
      currentState: userRepos[0],
    };
  } catch (error) {
    console.error('Error fetching repositories:', error);
    throw error;
  }
};

export { fetchUserCommits, getRepoLst, getReposWithCommitsToday };
