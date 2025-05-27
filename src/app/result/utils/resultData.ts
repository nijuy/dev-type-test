// ✅ JSON 데이터 타입 정의
export interface ResultDataType {
  [key: string]: number;
}

// ✅ 차트 데이터 정렬
export const getResultData = (): ResultDataType => {
  const testResultData = localStorage.getItem('typeResult');
  if (testResultData) {
    const data = JSON.parse(testResultData) as ResultDataType;

    const sortedEntries = Object.entries(data).sort(([, a], [, b]) => b - a);

    return Object.fromEntries(sortedEntries);
  }
  throw new Error('No result data found in localStorage');
};

// ✅ 차트 데이터 가공 (to Percentage)
export const convertToPercentage = (data: ResultDataType): ResultDataType => {
  const total = Object.values(data).reduce((sum, v) => sum + v, 0);

  const percentageData: ResultDataType = {};
  for (const [key, value] of Object.entries(data)) {
    percentageData[key] = parseFloat(((value / total) * 100).toFixed(1));
  }

  return percentageData;
};

// ✅ 결과 유형 데이터 가져오기
export const getTypeData = (): string => {
  const resultData = getResultData();
  const mainType = Object.entries(resultData)[0][0];

  return mainType;
};
