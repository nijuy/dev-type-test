'use client';

import { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { get } from 'http';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Chart() {
  // 테스트용 데이터 로컬 스토리지에 저장
  useEffect(() => {
    const testResult = {
      야생형: 23,
      교과서형: 12,
      지피티형: 42,
      문제집형: 2,
      메뚜기형: 13,
    };

    localStorage.setItem('typeResult', JSON.stringify(testResult));
  }, []);

  // ✅ JSON 데이터 타입 정의
  interface ResultDataType {
    [key: string]: number;
  }

  // ✅ 차트 데이터 타입 정의
  interface ChartDataType {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string[];
      borderColor: string;
      borderWidth: number;
    }[];
  }

  // ✅ 차트 데이터 정렬
  const getResultData = (): ResultDataType => {
    const resultData = localStorage.getItem('typeResult');
    if (resultData) {
      const data = JSON.parse(resultData) as ResultDataType;
      const sortedEntries = Object.entries(data).sort(([, a], [, b]) => b - a);
      return Object.fromEntries(sortedEntries) as ResultDataType;
    }
    throw new Error('No result data found in localStorage');
  };

  // ✅ 차트 데이터 가공(비율로 변경)
  const getPercentageData = (data: ResultDataType): ResultDataType => {
    const total = Object.values(data).reduce((acc, value) => acc + value, 0);
    if (total === 0) return data;
    return Object.fromEntries(
      Object.entries(data).map(([key, value]) => [key, (value / total) * 100]),
    );
  };

  // ✅ 차트 데이터 생성
  const [chartData, setChartData] = useState<ChartDataType>({
    labels: [],
    datasets: [
      {
        label: '유형별 비율',
        data: [],
        backgroundColor: [
          '#f87171', // red-400
          '#60a5fa', // blue-400
          '#facc15', // yellow-400
          '#34d399', // green-400
          '#a78bfa', // purple-400
        ],
        borderColor: 'rgba(255, 255, 255, 0.5)',
        borderWidth: 3,
      },
    ],
  });

  useEffect(() => {
    try {
      const resultData = getResultData();
      const labels = Object.keys(resultData);
      const data = Object.values(getPercentageData(resultData));

      setChartData((prev) => ({
        labels,
        datasets: [
          {
            ...prev.datasets[0],
            data,
            backgroundColor: prev.datasets[0].backgroundColor.slice(
              0,
              labels.length,
            ),
            borderColor: prev.datasets[0].borderColor,
            borderWidth: prev.datasets[0].borderWidth,
          },
        ],
      }));
    } catch (error) {
      console.error(error);
    }
  }, []);

  return <Doughnut data={chartData} />;
}
