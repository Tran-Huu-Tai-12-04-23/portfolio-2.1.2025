import axios from 'axios';

const token =
  process.env.GITHUB_TOKEN ||
  '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'; // Use environment variable for the token
const username = 'Tran-Huu-Tai-12-04-23'; // Thay bằng username GitHub của bạn

// eslint-disable-next-line consistent-return
export const getReposWithCommitsToday = async () => {
  const today = new Date().toISOString().split('T')[0];

  try {
    // Lấy danh sách repo của bạn
    const reposResponse = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );
    const repos = reposResponse.data;

    const reposWithCommitsAndPRs = [];

    // eslint-disable-next-line no-restricted-syntax
    for (const repo of repos) {
      const commitsUrl = `https://api.github.com/repos/${username}/${repo.name}/commits`;
      const pullsUrl = `https://api.github.com/repos/${username}/${repo.name}/pulls?state=all`;

      try {
        // eslint-disable-next-line no-await-in-loop
        const [commitsResponse, pullsResponse] = await Promise.all([
          axios.get(commitsUrl, {
            headers: { Authorization: `token ${token}` },
          }),
          axios.get(pullsUrl, {
            headers: { Authorization: `token ${token}` },
          }),
        ]);

        const commits = commitsResponse.data;
        const pulls = pullsResponse.data;

        // Lọc các commit trong hôm nay
        const todayCommits = commits.filter((commit) =>
          commit.commit.author.date.startsWith(today)
        );

        // Lọc các pull request trong hôm nay
        const todayPulls = pulls.filter(
          (pull) =>
            pull.created_at.startsWith(today) ||
            pull.merged_at?.startsWith(today)
        );

        if (todayCommits.length > 0 || todayPulls.length > 0) {
          reposWithCommitsAndPRs.push({
            repo: repo.name,
            commits: todayCommits.map((commit) => ({
              message: commit.commit.message,
              url: commit.html_url,
              date: commit.commit.author.date,
              author: commit.commit.author.name,
            })),
            pulls: todayPulls.map((pull) => ({
              title: pull.title,
              url: pull.html_url,
              date: pull.created_at,
              mergedDate: pull.merged_at,
              author: pull.user.login,
            })),
          });
        }
      } catch (err) {
        console.log(`Error fetching data for ${repo.name}:`, err.message);
      }
    }

    console.log(
      'Repositories with commits and pull requests today:',
      reposWithCommitsAndPRs
    );
    return reposWithCommitsAndPRs;
  } catch (error) {
    console.log('Error fetching repositories:', error.message);
  }
};
