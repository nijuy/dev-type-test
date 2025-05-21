export default function Btn({ type, text }: { type: number; text: string }) {
  return (
    <button
      className={`${type === 0 ? 'border border-[#02B694] text-[#02B694]' : 'bg-[#02B694] text-white'} flex-center h-[2.125rem] w-full rounded-lg md:h-[2.125rem] md:w-[11.875rem]`}
    >
      {text}
    </button>
  );
}
