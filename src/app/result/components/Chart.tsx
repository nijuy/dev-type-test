'use client';

import { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement);
ChartJS.register(ChartDataLabels);

export default function Chart() {
  // 테스트용 데이터 로컬 스토리지에 저장 -> 평균점수로 변경
  useEffect(() => {
    const testResult = {
      야생형: 3.7,
      교과서형: 3.0,
      지피티형: 2.5,
      문제집형: 1.8,
      메뚜기형: 3.2,
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
    const testResultData = localStorage.getItem('typeResult');
    if (testResultData) {
      const data = JSON.parse(testResultData) as ResultDataType;

      const sortedEntries = Object.entries(data).sort(([, a], [, b]) => b - a);
      const sortedData = Object.fromEntries(sortedEntries);

      return sortedData;
    }
    throw new Error('No result data found in localStorage');
  };

  // ✅ 차트 데이터 가공 (to Percentage)
  const convertToPercentage = (data: ResultDataType): ResultDataType => {
    const total = Object.values(data).reduce((sum, v) => sum + v, 0);

    const percentageData: ResultDataType = {};
    for (const [key, value] of Object.entries(data)) {
      percentageData[key] = parseFloat(((value / total) * 100).toFixed(1));
    }

    return percentageData;
  };

  // ✅ 차트 옵션 설정
  const chartOptions = {
    plugins: {
      datalabels: {
        color: '#ffffff',
        font: () => {
          const width = window.innerWidth;
          return {
            size: width < 640 ? 10 : 16,
            weight: 'bold' as const,
          };
        },
        formatter: (value: number, context: any) => {
          const label = context.chart.data.labels[context.dataIndex];
          return `${label}\n${value}%`;
        },
      },
    },
  };

  // ✅ 차트 기본 데이터 생성
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
      const percentageData = convertToPercentage(resultData);
      const labels = Object.keys(percentageData);
      const data = Object.values(percentageData);

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

  return <Doughnut data={chartData} options={chartOptions} />;
}
