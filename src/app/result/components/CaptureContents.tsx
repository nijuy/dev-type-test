'use client';

import { useEffect, useRef, useState } from 'react';
import captureElement from '../utils/captureElement';
import { useRouter } from 'next/navigation';
import { getTypeData } from '../utils/resultData';
import Chart from '../components/Chart';
import { resultData } from '../utils/typeDescription';

// 버튼 컴포넌트
import Btn from './Btn';
import DetailInfo from './DetailInfo';

// ✅ 유저 데이터 타입 정의
interface UserDataType {
  name: string | null;
  typeResult: string;
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
