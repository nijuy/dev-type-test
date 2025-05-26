'use client';

import { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Context } from 'chartjs-plugin-datalabels';
import { getResultData, convertToPercentage } from '../utils/resultData';

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
        formatter: (value: number, context: Context) => {
          const label = context.chart.data.labels?.[context.dataIndex];
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

  // getResultData, convertToPercentage 외부 함수 사용
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
