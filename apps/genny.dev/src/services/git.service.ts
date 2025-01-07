import axios from 'axios';

const token = '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'; // Thay bằng GitHub token của bạn
const username = 'Tran-Huu-Tai-12-04-23'; // Thay bằng username GitHub của bạn

// eslint-disable-next-line consistent-return
export const getReposWithCommitsToday = async () => {
  const today = new Date().toISOString().split('T')[0];

  try {
    // Lấy danh sách repo của bạn
    const reposResponse = await axios.get(
      `https://api.github.com/users/${username}/repos`,
      {
        headers: { Authorization: `token ${token}` },
      }
    );
    const repos = reposResponse.data;

    const reposWithCommits = [];

    // eslint-disable-next-line no-restricted-syntax
    for (const repo of repos) {
      const commitsUrl = `https://api.github.com/repos/${username}/${repo.name}/commits`;

      try {
        // eslint-disable-next-line no-await-in-loop
        const commitsResponse = await axios.get(commitsUrl, {
          headers: { Authorization: `token ${token}` },
        });

        const commits = commitsResponse.data;

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

getReposWithCommitsToday();
