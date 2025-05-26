// ✅ 결과 데이터 타입 정의
export interface ResultDataType {
  title: string;
  desc: string;
  studyMethod: string;
}

// ✅ 결과 데이터
export const resultData: Record<string, ResultDataType> = {
  야생형: {
    title: '일단 만들고 부딪히면서 배우는 상남자 유형입니다!',
    desc: '책을 통해 이론을 미리 다져두기보다는 코드를 작성하면서 문제를 해결해 나가는 스타일의 개발자입니다. 책상 앞에서 정석만 반복하기보다는 막히는 부분이 생기면 그때그때 검색하거나 문서를 참고하여 즉시 해결책을 찾아내죠. 이 과정에서 자연스럽게 시행착오를 겪으며 배우다 보니 배운 지식이 기억에 더 오래 남고 자신만의 노하우를 쌓아가는 것이 가장 큰 장점입니다. 이렇게 직접 경험하며 성장하는 방식이야말로, 빠르게 변화하는 개발 환경 속에서 강한 생존력을 발휘하게 합니다.',
    studyMethod: '작은 미니 프로젝트, 피드백 루프 짧게',
  },
  교과서형: {
    title: '',
    desc: '',
    studyMethod: '',
  },
  지피티형: {
    title: '',
    desc: '',
    studyMethod: '',
  },
  문제집형: {
    title: '',
    desc: '',
    studyMethod: '',
  },
  메뚜기형: {
    title: '',
    desc: '',
    studyMethod: '',
  },
};
