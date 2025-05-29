import { QuestionType } from '../types/questionContent';

type Answers = Record<number, number>;
interface TypeScore {
  sum: number;
  count: number;
}

export function calculateResult(
  questions: QuestionType[],
  answers: Answers,
): Record<string, number> {
  const resultTypes: Record<string, TypeScore> = {
    야생형: { sum: 0, count: 0 },
    교과서형: { sum: 0, count: 0 },
    지피티형: { sum: 0, count: 0 },
    문제집형: { sum: 0, count: 0 },
    메뚜기형: { sum: 0, count: 0 },
  };

  for (const q of questions) {
    const answerValue = answers[q.id];

    if (answerValue === undefined) continue;

    q.weights.forEach((type) => {
      if (resultTypes[type]) {
        resultTypes[type].sum += answerValue;
        resultTypes[type].count += 1;
      } else {
        console.warn(`weight - 없는 타입입니다! : ${type}`);
      }
    });

    q.inverseWeights.forEach((type) => {
      const inverseValue = 6 - answerValue;
      if (resultTypes[type]) {
        resultTypes[type].sum += inverseValue;
        resultTypes[type].count += 1;
      } else {
        console.warn(`inverseWeight - 없는 타입입니다! : ${type}`);
      }
    });
  }

  const result: Record<string, number> = {};

  Object.entries(resultTypes).forEach(([type, { sum, count }]) => {
    result[type] = count > 0 ? Math.round((sum / count) * 100) / 100 : 0;
  });

  return result;
}
