'use client';

import { useRouter } from 'next/navigation';
import { generateNickname } from './utils/randomNickname';

export default function HomePage() {
  const router = useRouter();

  const handleStart = () => {
    const input = document.getElementById('nickname-input') as HTMLInputElement;
    let nickname = input?.value.trim();

    if (!nickname) {
      nickname = generateNickname();
    }

    localStorage.setItem('nickname', nickname);
    router.push('/question');
  };

  return (
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
          <input
            id="nickname-input"
            type="text"
            placeholder="닉네임을 입력해 주세요."
            className="focus:ring-primary w-full border-b border-gray-400 bg-transparent px-4 py-2 text-center placeholder-gray-400 focus:ring-2 focus:outline-none"
          />
          <p className="text-sm">
            Tip) 닉네임 없이 시작하면 랜덤 닉네임이 생성돼요.
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
  );
}
