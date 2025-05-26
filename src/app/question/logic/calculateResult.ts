import { QuestionType } from '../types/QuestionContentData';

export type Answers = Record<number, number>;

export function calculateResult(
  questions: QuestionType[],
  answers: Answers,
): Record<string, number> {
  const resultTypes: Record<string, number[]> = {
    야생형: [],
    교과서형: [],
    지피티형: [],
    문제집형: [],
    메뚜기형: [],
  };

  for (const q of questions) {
    const answerValue = answers[q.id];

    if (answerValue == null) continue;

    q.weight.forEach((type) => {
      if (resultTypes[type]) {
        resultTypes[type].push(answerValue);
      } else {
        console.warn(`weight - 없는 타입입니다! : ${type}`);
      }
    });

    if (q.inverseWeight) {
      q.inverseWeight.forEach((type) => {
        if (resultTypes[type]) {
          resultTypes[type].push(6 - answerValue);
        } else {
          console.warn(`inverseWeight - 없는 타입입니다! : ${type}`);
        }
      });
    }
  }

  const result: Record<string, number> = {};

  Object.keys(resultTypes).forEach((type) => {
    const scores = resultTypes[type];
    const average =
      scores.length > 0
        ? scores.reduce((sum, score) => sum + score, 0) / scores.length
        : 0;

    // TODO: 소수점 둘째자리까지 반올림 or 소수점 첫째자리까지 반올림
    result[type] = Math.round(average * 100) / 100;
  });

  return result;
}
