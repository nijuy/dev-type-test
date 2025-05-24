export default function RadioGroup({
  active,
  onChange,
}: {
  active: number;
  onChange: (num: number) => void;
}) {
  const textLabel = [
    '매우 그렇지 않다',
    '그렇지 않다',
    '보통이다',
    '그렇다',
    '매우 그렇다',
  ];

  return (
    <div>
      {textLabel.map((label, index) => (
        <label
          key={index}
          htmlFor={`option-${index + 1}`}
          className={'mb-2.5 block w-full cursor-pointer'}
        >
          <input
            type="radio"
            id={`option-${index + 1}`}
            name="option"
            value={index + 1}
            checked={active === index + 1}
            onChange={() => onChange(index + 1)}
            className="peer hidden w-full"
          />
          <div
            className={`flex h-[3.13rem] w-full items-center truncate rounded-xl bg-[#F3F3F7] px-5 text-sm font-bold text-black transition-colors peer-checked:bg-[#14B8A6] peer-checked:text-white md:h-[3.75rem] md:px-7 md:text-lg`}
          >
            {index + 1}. {label}
          </div>
        </label>
      ))}
    </div>
  );
}
