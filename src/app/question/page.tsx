'use client';
import { useRouter } from 'next/navigation';
import { useQuestionProgress } from './hooks/useQuestionProgress';
import QUESTIONS from '@/app/question/data/questions.json';
import QuestionContent from './components/QuestionContent';
import RadioGroup from './components/RadioGroup';
import ProgressBar from './components/ProgressBar';

export default function QuestionPage() {
  const { currentIndex, answers, prev, next, select } = useQuestionProgress();
  const question = QUESTIONS[currentIndex];

  const router = useRouter();

  const handleChange = (selected: number) => {
    const isFirstAnswer = !answers[question.id];
    select(question.id, selected);

    const isLastQuestion = currentIndex === QUESTIONS.length - 1;
    if (isLastQuestion) {
      router.push('/result');
    } else if (isFirstAnswer) {
      setTimeout(next, 300);
    }
  };

  return (
    <div className="container flex min-h-dvh flex-col items-center justify-between md:justify-start">
      <main className="mb-10 w-full md:mb-20">
        <div className="grid w-full gap-y-10">
          <QuestionContent text={question.question} id={question.id} />
          <RadioGroup onChange={handleChange} active={answers[question.id]} />
        </div>
      </main>
      <nav className="mb-10 w-full md:mb-0 md:w-[30.5rem]">
        <ProgressBar
          currentIndex={currentIndex}
          hasAnswer={!!answers[question.id]}
          clickPrev={prev}
          clickNext={next}
        />
      </nav>
    </div>
  );
}
