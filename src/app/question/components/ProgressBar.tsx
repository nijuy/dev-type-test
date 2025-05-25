import Image from 'next/image';
import QUESTIONS from '@/app/question/data/questions.json';

export default function ProgressBar({
  currentIndex,
  hasAnswer,
  clickPrev,
  clickNext,
}: {
  currentIndex: number;
  hasAnswer: boolean;
  clickPrev: () => void;
  clickNext: () => void;
}) {
  const isDisabledLeft = currentIndex === 0;
  const isDisabledRight = !hasAnswer;

  return (
    <div className="grid gap-y-6">
      <div className="flex justify-between">
        <button
          className="disabled:bg-secondary bg-primary flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl text-black disabled:cursor-not-allowed"
          disabled={isDisabledLeft}
          onClick={clickPrev}
        >
          <Image
            src={'/arrow_left.svg'}
            width={24}
            height={24}
            alt="left icon"
            unoptimized
          />
        </button>
        <span className="text-2xl font-semibold text-white">{`${currentIndex + 1} / ${QUESTIONS.length}`}</span>
        <button
          className="disabled:bg-secondary bg-primary flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl text-black disabled:cursor-not-allowed"
          disabled={isDisabledRight}
          onClick={clickNext}
        >
          <Image
            src={'/arrow_right.svg'}
            width={24}
            height={24}
            alt="right icon"
            unoptimized
          />
        </button>
      </div>
      <div className="bg-foreground h-4 w-full rounded-full">
        <div
          className="bg-primary h-full max-w-full rounded-full transition-all duration-300"
          style={{
            width: `${((currentIndex + 1) / QUESTIONS.length) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}
