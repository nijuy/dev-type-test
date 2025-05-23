export default function RadioGroup({ active, onChange }: {
  active: number; onChange: (num: number) => void;
}) {
  const textLabel = ['매우 그렇지 않다', '그렇지 않다', '보통이다', '그렇다', '매우 그렇다'];

  return (
    <div>
      {textLabel.map((label, index) => (
        <label
          key={index}
          htmlFor={`option-${index+1}`}
          className={`
            w-full block mb-2.5 cursor-pointer
          `}
        >
          <input
            type="radio"
            id={`option-${index+1}`}
            name="option"
            value={index+1}
            checked={active === index+1}
            onChange={() => onChange(index+1)}
            className="w-full peer hidden"
          />
          <div
            className={`
              w-full h-[3.13rem] flex items-center px-5 rounded-xl font-bold text-sm md:text-lg md:h-[3.75rem] md:px-7
              transition-colors truncate
              ${active === index+1
                ? 'bg-[#14B8A6] text-white'
                : 'bg-[#F3F3F7] text-black'
              }
            `}
          >
            {index+1}. {label}
          </div>
        </label>
      ))}
    </div>
  );
}