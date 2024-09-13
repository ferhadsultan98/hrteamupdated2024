import React, { useRef, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';
import './dashboard.css';

Chart.register(...registerables);

const Dashboard = () => {
  const revenueChartRef = useRef(null);
  const salesChartRef = useRef(null);

  useEffect(() => {
    if (!revenueChartRef.current || !salesChartRef.current) return;

    const ctx1 = revenueChartRef.current.getContext('2d');
    const revenueChart = new Chart(ctx1, {
      type: 'bar',
      data: {
        labels: ['2006', '2008', '2010', '2012'],
        datasets: [
          {
            label: 'Toplam Gelir',
            data: [75, 50, 75, 100],
            backgroundColor: 'orange',
            borderColor: 'rgba(255, 165, 0, 0.8)',
            borderWidth: 1
          },
          {
            label: 'Toplam Gider',
            data: [90, 60, 50, 90],
            backgroundColor: 'red',
            borderColor: 'rgba(255, 0, 0, 0.8)',
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    const ctx2 = salesChartRef.current.getContext('2d');
    const salesChart = new Chart(ctx2, {
      type: 'line',
      data: {
        labels: ['2006', '2008', '2010', '2012'],
        datasets: [
          {
            label: 'Toplam Satış',
            data: [50, 60, 40, 75],
            borderColor: 'orange',
            fill: false,
            borderWidth: 2
          },
          {
            label: 'Toplam Gelir',
            data: [90, 50, 60, 100],
            borderColor: 'red',
            fill: false,
            borderWidth: 2
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    return () => {
      revenueChart.destroy();
      salesChart.destroy();
    };
  }, []);

  return (
    <div className="dashboard-container">
      <section className="charts">
        <div className="chart-container">
          <canvas ref={revenueChartRef}></canvas>
        </div>
        <div className="chart-container">
          <canvas ref={salesChartRef}></canvas>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
