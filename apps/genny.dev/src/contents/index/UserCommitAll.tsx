/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-await-in-loop */
// eslint-disable-next-line import/no-extraneous-dependencies, simple-import-sort/imports
import { Chart, registerables } from 'chart.js';
import 'chartjs-adapter-date-fns';
import { useEffect, useRef, useState } from 'react';

// Register the necessary components
Chart.register(...registerables);

function UserCommitChartAll() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null);
  const [commitData, setCommitData] = useState<{ x: string; y: number }[]>([]);
  const owner = 'Tran-Huu-Tai-12-04-23'; // Tên người dùng
  const token =
    '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';

  useEffect(() => {
    // Hàm lấy dữ liệu commit
    const fetchUserCommits = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/tran-huu-tai-12-04-23/repos`,
          {
            headers: {
              Authorization: `token ${token}`,
            },
          }
        );

        const repos = await response.json();
        const allCommits: { x: string; y: number }[] = [];

        // eslint-disable-next-line no-restricted-syntax
        for (const repo of repos) {
          try {
            const commitsResponse = await fetch(
              `https://api.github.com/repos/${owner}/${repo.name}/commits`,
              {
                headers: {
                  Authorization: `token ${token}`,
                },
              }
            );

            // eslint-disable-next-line no-await-in-loop
            const commits = await commitsResponse.json();

            // Lọc commit của riêng bạn
            const userCommits = commits.filter(
              (commit) => commit.author?.login === owner
            );

            // Tính toán số commit mỗi ngày
            userCommits.forEach((commit) => {
              const date = new Date(
                commit.commit.author.date
              ).toLocaleDateString();
              allCommits.push({ x: date, y: 1 });
            });
          } catch (repoError) {
            console.error(
              `Error fetching commits for repo ${repo.name}:`,
              repoError
            );
          }
        }

        console.log(allCommits);
        // Cập nhật dữ liệu biểu đồ
        setCommitData(allCommits);
      } catch (error) {
        console.error('Error fetching repos:', error);
      }
    };

    fetchUserCommits();
  }, [owner, token]);

  useEffect(() => {
    if (chartRef.current && commitData.length > 0) {
      // Destroy the previous chart instance if it exists
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      // Create a new chart instance
      chartInstanceRef.current = new Chart(chartRef.current, {
        type: 'line',
        data: {
          datasets: [
            {
              label: 'My commits',
              data: commitData,
              backgroundColor: 'rgba(165, 137, 248, 0.2)',
              borderColor: 'rgb(165, 137, 248)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              type: 'time',
              time: {
                unit: 'day',
              },
              title: {
                display: true,
                text: 'Date',
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Commits',
              },
            },
          },
        },
      });
    }
  }, [commitData]);

  return <canvas ref={chartRef} width={400} height={200} />;
}

export default UserCommitChartAll;
