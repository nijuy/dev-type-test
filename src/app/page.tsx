'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { generateNickname } from '@/utils/random-nickname';
import { badWords } from '@/lib/bad-words';

export default function HomePage() {
  const router = useRouter();

  /** ✅ 닉네임 */
  const [nickname, setNickname] = useState<string>('');
  const [isBadWordModalOpen, setIsBadWordModalOpen] = useState<boolean>(false);

  /** ✅ 시작 버튼 클릭 시 */
  const handleStart = useCallback(() => {
    let finalNickname = nickname.trim();

    /** ✅ 비속어 체크 */
    if (badWords.some((word) => finalNickname.includes(word))) {
      setIsBadWordModalOpen(true);
      return;
    }

    /** ✅ 닉네임이 없으면 랜덤 닉네임 생성 */
    if (finalNickname === '') {
      finalNickname = generateNickname();
      setNickname(finalNickname);
    }

    /** ✅ 닉네임 저장 */
    localStorage.setItem('nickname', finalNickname);

    /** ✅ 질문 페이지로 이동 */
    router.push('/question');
  }, [nickname, router]);

  return (
    <>
      <div className="container flex h-dvh flex-col items-center">
        <main className="text-foreground flex h-[calc(100%-11rem)] w-full max-w-md flex-col justify-between space-y-10 text-center">
          <div className="my-11 text-3xl leading-16 font-bold">
            <p>
              <span className="text-primary">개발자 </span>
              유형테스트
            </p>
            <p className="mt-2 text-xl">나는 어떤 개발자일까?</p>
          </div>
          <div className="space-y-6">
            <label htmlFor="nickname-input" className="sr-only">
              닉네임
            </label>
            <input
              onChange={(e) => setNickname(e.target.value)}
              value={nickname}
              id="nickname-input"
              type="text"
              placeholder="닉네임을 입력해 주세요."
              className="focus:ring-primary w-full border-b border-gray-400 bg-transparent px-4 py-2 text-center placeholder-gray-400 focus:ring-2 focus:outline-none"
            />
            <p className="text-sm">
              Tip&#41; 닉네임 없이 시작하면 랜덤 닉네임이 생성돼요
            </p>
            <button
              onClick={handleStart}
              className="rounded-full bg-white px-8 py-3 font-semibold text-black transition hover:bg-gray-200"
            >
              Start
            </button>
          </div>
        </main>
      </div>

      {isBadWordModalOpen && (
        <div className="modal-wrapper">
          <div className="modal-inner">
            <p className="text-xl font-semibold">이쁜말을 사용해 주세요!</p>
            <button
              onClick={() => setIsBadWordModalOpen(false)}
              className="bg-primary rounded-full px-8 py-2 font-semibold text-white"
            >
              확인
            </button>
          </div>
        </div>
      )}
    </>
  );
}
