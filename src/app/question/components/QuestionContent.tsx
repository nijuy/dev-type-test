import { QuestionType } from '../types/QuestionContentData';

export default function QuestionContent({ data }: { data: QuestionType }) {
  return (
    <div className="w-full">
      <p className="mb-3.75 text-3xl font-bold text-white md:mb-10 md:text-5xl">{`Q${data.id}.`}</p>
      <p className="text-2xl font-semibold whitespace-pre-line text-white md:text-4xl">
        {data.text}
      </p>
    </div>
  );
}
