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
        <main className="flex-col items-center space-y-[12px] md:space-y-[40px]">
          <div className="space-y-[12px]">
            <div className="font-['Inter'] text-[18px] font-medium text-white md:text-[24px]">
              {userName}님은
            </div>
            <div className="font-['Inter'] text-[26px] font-bold text-white md:text-[36px]">
              {userMainType}개발자입니다
            </div>
          </div>

          <div className="flex h-[150px] w-full items-center justify-center rounded-xl border border-white text-white md:h-[270px]">
            차트 들어갈 예정(chart.js)
          </div>

          <div className="flex flex-col space-y-[12px] font-['Inter'] text-white md:space-y-[30px]">
            <div className="flex flex-col space-y-[2px] md:space-y-[16px]">
              <p className="text-base font-bold md:text-[22px]">유형 소개</p>
              <div className="w-full rounded-[16px] bg-[#2A374A] px-[16px] py-[20px] text-base leading-relaxed font-normal whitespace-pre-line md:text-[22px]">
                {description}
              </div>
            </div>
            <div className="flex flex-col space-y-[2px] md:space-y-[16px]">
              <p className="text-base font-bold md:text-[22px]">공부 방법</p>
              <div className="w-full rounded-[16px] bg-[#2A374A] px-[16px] py-[20px] text-base leading-relaxed font-normal whitespace-pre-line md:text-[22px]">
                {studyMethod}
              </div>
            </div>
          </div>

          <div className="mt-[40px] flex flex-col space-y-[11px] text-[14px] font-bold md:mt-[70px] md:flex-row md:justify-center md:space-x-[19px] md:text-[18px]">
            <button className="flex h-[34px] w-full items-center justify-center rounded-[9px] border border-[#02B694] text-[#02B694] md:h-[52px] md:w-[190px] md:border-2">
              다시하기
            </button>
            <button className="flex h-[34px] w-full items-center justify-center rounded-[9px] bg-[#02B694] text-white md:h-[52px] md:w-[190px]">
              링크 복사
            </button>
            <button className="flex h-[34px] w-full items-center justify-center rounded-[9px] bg-[#02B694] text-white md:h-[52px] md:w-[190px]">
              이미지 저장
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
