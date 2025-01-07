// eslint-disable-next-line import/no-extraneous-dependencies
import { Chart, registerables } from 'chart.js';
import { useEffect, useRef, useState } from 'react';

import { fetchUserCommits } from '@/services/git.service';

// Register the necessary components
Chart.register(...registerables);

// Use environment variable for GitHub token
function UserCommitChart({ owner, repo }: any) {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null);
  const [commitData, setCommitData] = useState<{
    labels: string[];
    data: number[];
  }>({ labels: [], data: [] });

  useEffect(() => {
    // Hàm lấy dữ liệu commit
    fetchUserCommits(owner, repo).then((data) => {
      setCommitData(data);
    });
  }, [owner, repo]);

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
