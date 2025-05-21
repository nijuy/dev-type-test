interface QuestionContentData {
  id: number;
  text: string;
  weight?: string[];
  inverseWeight?: string[];
}

export default function QuestionContent({ data }: { data: QuestionContentData }) {
  return (
    <div className="w-full">
      <p className="font-bold text-white mb-3.75 text-3xl md:mb-10 md:text-5xl">{`Q${data.id}.`}</p>
      <p className="font-semibold text-white text-2xl md:text-4xl whitespace-pre-line">
        {data.text}
      </p>
    </div>
  );
}