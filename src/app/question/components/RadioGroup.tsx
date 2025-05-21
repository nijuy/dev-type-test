export default function RadioGroup({ active, onChange }: {
  active: number; onChange: (num: number) => void;
}) {
  const textLabel = ['매우 그렇지 않다', '그렇지 않다', '보통이다', '그렇다', '매우 그렇다'];

  return (
    <div>
      {[1, 2, 3, 4, 5].map((num) => (
        <label
          key={num}
          htmlFor={`option-${num}`}
          className={`
            w-full block mb-2.5 cursor-pointer
          `}
        >
          <input
            type="radio"
            id={`option-${num}`}
            name="option"
            value={num}
            checked={active === num}
            onChange={() => onChange(num)}
            className="w-full peer hidden"
          />
          <div
            className={`
              w-full h-[3.13rem] flex items-center px-5 rounded-xl font-bold text-sm md:text-lg md:h-[3.75rem] md:px-7
              transition-colors truncate
              ${active === num
                ? 'bg-[#14B8A6] text-white'
                : 'bg-[#F3F3F7] text-black'
              }
            `}
          >
            {num}. {textLabel[num - 1]}
          </div>
        </label>
      ))}
    </div>
  );
}