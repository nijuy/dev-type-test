import Head from './head';

export default function ResultPage() {
  const userName = '하영';
  const userMainType = '야생형';
  const description = `**** 설명 ****
  *
  *`;
  const studyMethod = `**** 공부방법 ****
  *
  *`;

  return (
    <div className="flex min-h-screen justify-center bg-slate-800">
      <div className="w-full max-w-[718px] px-[21px] pt-[60px] pb-[36px]">
        <main className="flex-col items-center space-y-[12px]">
          <div className="space-y-[12px]">
            <div className="font-['Inter'] text-[18px] font-medium text-white">
              {userName}님은
            </div>
            <div className="font-['Inter'] text-[26px] font-bold text-white">
              {userMainType}개발자입니다
            </div>
          </div>

          <div className="flex h-[200px] w-full items-center justify-center rounded-xl border border-white text-white">
            차트 들어갈 예정
          </div>

          <div className="flex flex-col space-y-[12px] font-['Inter'] text-white">
            <div className="flex flex-col space-y-[2px]">
              <p className="text-base font-bold">유형 소개</p>
              <div className="w-full rounded-[16px] bg-[#2A374A] px-[16px] py-[20px] text-base leading-relaxed font-normal whitespace-pre-line">
                {description}
              </div>
            </div>
            <div className="flex flex-col space-y-[2px]">
              <p className="text-base font-bold">공부 방법</p>
              <div className="w-full rounded-[16px] bg-[#2A374A] px-[16px] py-[20px] text-base leading-relaxed font-normal whitespace-pre-line">
                {studyMethod}
              </div>
            </div>
          </div>

          <div className="mt-[40px] flex flex-col space-y-[11px] text-[14px] font-bold">
            <button className="flex h-[34px] w-full items-center justify-center rounded-[9px] border border-[#02B694] text-[#02B694]">
              다시하기
            </button>
            <button className="flex h-[34px] w-full items-center justify-center rounded-[9px] bg-[#02B694] text-white">
              링크 복사
            </button>
            <button className="flex h-[34px] w-full items-center justify-center rounded-[9px] bg-[#02B694] text-white">
              이미지 저장
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
