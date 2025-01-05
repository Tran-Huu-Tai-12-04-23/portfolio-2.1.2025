// eslint-disable-next-line import/no-extraneous-dependencies
import { Chart, registerables } from 'chart.js';
import { useEffect, useRef, useState } from 'react';

// Register the necessary components
Chart.register(...registerables);

function UserCommitChart({ owner, repo, token }: any) {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null);
  const [commitData, setCommitData] = useState<{
    labels: string[];
    data: number[];
  }>({ labels: [], data: [] });

  useEffect(() => {
    // Hàm lấy dữ liệu commit
    const fetchUserCommits = async () => {
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

        // Cập nhật dữ liệu biểu đồ
        setCommitData({
          labels: Object.keys(commitCounts),
          data: Object.values(commitCounts),
        });
      } catch (error) {
        console.error('Error fetching commits:', error);
      }
    };

    fetchUserCommits();
  }, [owner, repo, token]);

  useEffect(() => {
    if (chartRef.current && commitData.labels.length > 0) {
      // Destroy the previous chart instance if it exists
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      // Create a new chart instance
      chartInstanceRef.current = new Chart(chartRef.current, {
        type: 'radar',
        data: {
          labels: commitData.labels,
          datasets: [
            {
              label: 'My commits',
              data: commitData.data,
              backgroundColor: 'rgba(165, 137, 248, 0.2)',
              borderColor: 'rgb(165, 137, 248)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            r: {
              beginAtZero: true,
            },
          },
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    }
  }, [commitData]);

  return <canvas ref={chartRef} width={800} height={600} />;
}

export default UserCommitChart;
