// ✅ 결과 데이터 타입 정의
interface ResultDataType {
  title: string;
  desc: string;
  studyMethod: string;
}

// ✅ 결과 데이터
export const resultData: Record<string, ResultDataType> = {
  야생형: {
    title: '일단 만들어보자! 실전으로 부딪히면서 배우는 상개발자 유형입니다!',
    desc: '당신은 책을 통해 이론을 미리 다져두기보다는 코드를 작성하면서 문제를 해결해 나가는 스타일의 개발자입니다. 책상 앞에서 정석만 반복하기보다 막히는 부분이 생기면 그때그때 검색하거나 문서를 참고하여 즉시 해결책을 찾아내죠. 이 과정에서 시행착오를 겪으며 배운 지식은 기억에 더 오래 남게 되고 자연스럽게 본인만의 노하우를 쌓아가는 것이 가장 큰 장점입니다. 이렇게 직접 경험하며 성장하는 방식이야말로, 빠르게 변화하는 개발 환경 속에서 강한 생존력을 발휘하게 합니다.',
    studyMethod: '작은 미니 프로젝트, 피드백 루프 짧게',
  },
  교과서형: {
    title:
      '두꺼운 책 사고 첫 페이지 부터 읽어야 공부하는 거지! 개념부터 익히는 유형입니다!',
    desc: '당신은 개발의 기초와 원리를 기반으로 체계적으로 학습해 나가는 스타일의 개발자입니다! 새로운 기술이나 개념은 먼저 공식 문서나 교재부터 찾아봐야죠. 전체적인 구조와 이론을 이해한 뒤, 정석적인 방법과 모범 사례를 참고하여 안정적이고 일관성 있는 결과를 만들어내는 개발자입니다. 이런 당신은 변화가 빠른 IT 환경에서도 기본에 충실한 자세로 흔들림 없이 성장해 나가며, 시행착오를 최소화하고, 탄탄한 실력을 쌓을 수 있어요. 이렇게 쌓은 실력은 당신이 앞으로 어떤 분야에서 개발하더라도 안정적으로 성장할 수 있는 개발자로 만들어 줄 거예요!',
    studyMethod: '나만의 학습 로드맵 작성, 나만의 기술 블로그 만들기',
  },
  지피티형: {
    title:
      'GPT 서버 다운되면 개발 속도도 같이 다운됨... AI와 함께 빠르게 답을 찾아가는 유형입니다!',
    desc: '당신은 AI를 적극적으로 활용하여 GPT와 함께 답을 찾아가는 스타일의 개발자입니다! 어떤 어려운 문제에 직면하더라도 두려움 없이 GPT를 활용해 해결책을 빠르게 얻어내는 데 능숙하죠. 공식 문서나 책보다도 AI를 통해 실시간으로 조언받고, 복잡한 개념도 AI와 대화하는 과정에서 자연스럽게 습득하며 개발 실력을 쌓아갑니다. 개발 속도가 빠르고, 다양한 접근법을 다양하게 접해볼 수 있는 점은 최신 개발자에 가장 적합한 사람일지도 모릅니다! AI와의 협업을 통해 문제 해결 능력을 실시간으로 끌어올리며 빠르게 변화하는 IT 환경에서 유연하고 강력하게 적응할 수 있는 실전형 개발자입니다.',
    studyMethod:
      'AI가 제시한 코드를 검증하고 원리 파악해보기, AI 자료와 공식 문서를 비교하기',
  },
  문제집형: {
    title:
      '실력은 코테로 쌓는다... 코딩 테스트 문제에 많은 시간을 쓰는 유형입니다! ',
    desc: '당신은 알고리즘을 직접 풀어보며 실력을 키워나가는 문제 해결력이 강한 개발자입니다! 새로운 개념을 배울 때도 이론만 보는 것보다, 직접 풀어봐야 진짜 내 것이라는 생각을 가지고 있습니다. 백준이나 CodeForces에서 새로운 문제가 올라오면 괜히 한 번씩 눌러보고, 재미 삼아 대회에도 종종 참가하는 편이죠. 가끔 어려운 문제를 만나도 포기하지 않으며, 스스로의 약점을 하나씩 채워나가는 성실함이 돋보이는 개발자죠! 이런 꾸준함 덕분에 논리력과 문제 해결력이 자연스럽게 길러지고, 갑자기 낯선 문제가 나와도 당황하지 않고 차분하게 접근할 수 있어요. 이런 경험들이 쌓여서, 실무에서도 새로운 과제나 예상치 못한 상황이 닥쳤을 때 든든한 힘이 되어줄 겁니다!',
    studyMethod:
      '꾸준히 코딩테스트 문제 풀기, 다른 사람의 코드 분석하기, 프로그래밍 대회 참가',
  },
  메뚜기형: {
    title:
      '궁금한 분야는 다 해봐야 해! 호기심을 동력으로 다양한 분야를 공부하는 유형입니다!',
    desc: '당신은 새로운 언어나 기술을 마주치면 망설임 없이 도전해 보는 호기심과 적응력이 뛰어난 개발자입니다! JavaScript, Java, Python, Go 등 필요하다면 언제든 새로운 기술도 금방 익혀 적응할 수 있습니다. 이런 폭넓은 경험 덕분에 새로운 환경이나 프로젝트도 빠르게 파악하고, 여러 언어의 장단점을 활용할 수 있는 개발자죠. 낯선 기술도 “일단 해보자!”는 마음가짐으로 부딪혀보며, 실무에서 예상치 못한 상황이 닥쳐도 유연하게 대처할 수 있는 개발자죠! 이 언어, 저 언어 여러 기술을 넘나들며 만든 넓은 시야는 앞으로도 당신의 든든한 무기가 되어 실무에서 새로운 기술을 적용할 때 가장 먼저 찾게 되는 사람이 될 거예요!',
    studyMethod: '짧게라도 프로젝트 완성까지 진행, 경험을 기록하고 비교해보기',
  },
};
