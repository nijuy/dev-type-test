import DetailInfo from "./components/DetailInfo";
import Btn from "./components/Btn";

export default function ResultPage() {

    // ✅ 유저 데이터 타입 정의
    interface UserDataType {
        name: string;
        typeResult: string;
    }
    // ✅ 결과 데이터 타입 정의
    interface ResultDataType {
        title: string;
        desc: string;
        studyMethod: string;
    }


    // ✅ 유저 데이터
    const userData: UserDataType = {
        name: '하영',
        typeResult: '야생형'
    }
    // ✅ 결과 데이터 
    const resultData: Record<string, ResultDataType> = {
        '야생형': {
            title: '일단 만들고 부딪히면서 배우는 상남자 유형입니다!',
            desc: '책을 통해 이론을 미리 다져두기보다는 코드를 작성하면서 문제를 해결해 나가는 스타일의 개발자입니다. 책상 앞에서 정석만 반복하기보다는 막히는 부분이 생기면 그때그때 검색하거나 문서를 참고하여 즉시 해결책을 찾아내죠. 이 과정에서 자연스럽게 시행착오를 겪으며 배우다 보니 배운 지식이 기억에 더 오래 남고 자신만의 노하우를 쌓아가는 것이 가장 큰 장점입니다. 이렇게 직접 경험하며 성장하는 방식이야말로, 빠르게 변화하는 개발 환경 속에서 강한 생존력을 발휘하게 합니다.',
            studyMethod: '작은 미니 프로젝트, 피드백 루프 짧게',
        },
    }


    // ✅ 유형 소개 데이터
    const introTypeData = {
        title: '유형 소개',
        subTitle: resultData[userData.typeResult].title,
        desc: resultData[userData.typeResult].desc,
    }
    // ✅ 공부 방법 데이터
    const studyMethodData = {
        title: '공부 방법',
        desc: resultData[userData.typeResult].studyMethod,
    }

    return (
        <main className="container flex flex-col md:gap-[40px] gap-8">
            <div>
                <div className="font-medium md:text-[24px] text-[18px] text-white">
                    {userData.name}님은
                </div>
                <div className="md:text-[36px] text-[26px] font-bold md:mt-3 text-white">
                    <span className="text-[var(--primaryColor)]">{userData.typeResult}</span>
                    <span>&nbsp;개발자입니다</span>
                </div>
            </div>

            <div className="flex-center md:h-[270px] h-[150px] rounded-xl border border-white text-white">
                차트 들어갈 예정(chart.js)
            </div>

            <div className="flex flex-col xl:gap-7 gap-5 text-white">
                <DetailInfo data={introTypeData} />
                <DetailInfo data={studyMethodData} />
            </div>

            <div className="flex md:flex-row flex-col justify-center gap-3 md:text-[18px] text-[14px] font-bold">
                <Btn type={0} text="다시하기" />
                <Btn type={1} text="링크 복사" />
                <Btn type={1} text="이미지 저장" />
            </div>
        </main>
    );
}
