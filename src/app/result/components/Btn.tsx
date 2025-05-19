export default function Btn({ type, text }: { type: number, text: string }) {
   return (
      <button className={`${type === 0 ? 'border border-[#02B694] text-[#02B694]' : 'text-white bg-[#02B694]'} flex-center md:w-[190px] w-full md:h-[52px] h-[34px] rounded-[9px]`}>
         {text}
      </button>
   )
}