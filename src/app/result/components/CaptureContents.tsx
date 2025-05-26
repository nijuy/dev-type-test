'use client';

import { useEffect, useRef, useState } from 'react';
import captureElement from '../utils/captureElement';
import { useRouter } from 'next/navigation';
import { getTypeData } from '../utils/resultData';
import Chart from '../components/Chart';

// 버튼 컴포넌트
import Btn from './Btn';
import DetailInfo from './DetailInfo';

// ✅ 유저 데이터 타입 정의
interface UserDataType {
  name: string | null;
  typeResult: string;
}
// ✅ 결과 데이터 타입 정의
interface ResultDataType {
  title: string;
  desc: string;
  studyMethod: string;
}

export default function CaptureContents() {
  const router = useRouter();
  const captureRef = useRef<HTMLDivElement>(null);

  const [nickname, setNickname] = useState<UserDataType['name']>(null);
  const [userType, setUserType] =
    useState<UserDataType['typeResult']>('야생형');

  // ✅ 유저 데이터
  const userData: UserDataType = {
    name: nickname,
    typeResult: userType,
  };
  // ✅ 결과 데이터
  const resultData: Record<string, ResultDataType> = {
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

  // ✅ 유형 소개 데이터
  const introTypeData = {
    title: '유형 소개',
    subTitle: resultData[userData.typeResult].title,
    desc: resultData[userData.typeResult].desc,
  };
  // ✅ 공부 방법 데이터
  const studyMethodData = {
    title: '공부 방법',
    desc: resultData[userData.typeResult].studyMethod,
  };

  /** ✅ 이미지 저장 */
  const captureContents = () => {
    captureElement(captureRef.current);
  };

  /** ✅ 다시하기 클릭시 홈으로 */
  const reTry = () => {
    router.push('/');
  };

  /** ✅ 링크 복사 클릭시 링크 복사 */
  const copyLink = () => {
    navigator.clipboard.writeText('https://dev-type-test.vercel.app/');
    alert('링크가 복사되었습니다!');
  };

  useEffect(() => {
    const getNickName = window.localStorage.getItem('nickname') || null;
    const getUserType = getTypeData();
    setNickname(getNickName);
    setUserType(getUserType);

    // nickname이 없으면 홈으로 리다이렉트
    if (getNickName === null) {
      alert('잘못된 접근입니다!');
      router.push('/');
    }
  }, [router]);

  // 로딩 상태 처리
  if (nickname === null) {
    return null;
  }

  return (
    <div
      ref={captureRef}
      className="container flex flex-col gap-8 bg-slate-800 md:gap-10"
    >
      <div>
        <div className="md:text-6 text-[1.125rem] font-medium text-white">
          {userData.name}님은
        </div>
        <div className="md:text-9 text-[1.625rem] font-bold text-white md:mt-3">
          <span className="text-[var(--primaryColor)]">
            {userData.typeResult}
          </span>
          <span>&nbsp;개발자입니다</span>
        </div>
      </div>

      <div className="flex-center h-[20rem] gap-5 md:h-[28rem] md:gap-7">
        <Chart />
      </div>

      <div className="flex flex-col gap-5 text-white xl:gap-7">
        <DetailInfo data={introTypeData} />
        <DetailInfo data={studyMethodData} />
      </div>

      <div className="flex flex-col justify-center gap-3 text-[0.875rem] font-bold md:flex-row md:text-[1.125rem]">
        <Btn onClick={reTry} type={0} text="다시하기" />
        <Btn onClick={copyLink} type={1} text="링크 복사" />
        <Btn onClick={captureContents} type={1} text="이미지 저장" />
      </div>
    </div>
  );
}
