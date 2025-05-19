import Head from './head';

export default function ResultPage() {
  const userName = '하영';
  const userMainType = '야생형';
  const description = '설명';
  const studyMethod = '공부 방법';

  return (
    <div className="min-h-screen bg-slate-700">
      <Head />
      <main>
        <div>
          <div className="font-['Inter'] font-medium text-white">
            {userName}님은
          </div>
          <div className="font-['Inter'] font-bold text-white">
            {userMainType}개발자입니다
          </div>
        </div>
        <div className="absolute top-[340px] left-[21px] font-['Inter'] text-base font-bold text-white">
          유형 소개
        </div>
        <div className="absolute top-[371px] left-[22px] h-24 w-80 rounded-2xl bg-slate-700" />
        <div className="absolute top-[391px] left-[38px] h-20 w-72 font-['Inter'] text-base leading-relaxed font-normal text-white">
          {description}
        </div>
      </main>
    </div>
  );
}
