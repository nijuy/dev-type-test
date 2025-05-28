interface QuestionContentProps {
  id: number;
  text: string;
}

export default function QuestionContent({ id, text }: QuestionContentProps) {
  return (
    <div className="w-full">
      <p className="text-3xl font-bold text-white md:text-5xl">{`Q${id}.`}</p>
      <p className="text-2xl font-semibold whitespace-pre-line text-white md:text-4xl">
        {text}
      </p>
    </div>
  );
}
