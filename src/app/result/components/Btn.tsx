export default function Btn({
  onClick,
  type,
  text,
}: {
  onClick: () => void;
  type: number;
  text: string;
}) {
  return (
    <button
      onClick={onClick}
      // html2canvas 호환성을 위해 인라인 스타일로 적용
      style={{
        border: type === 0 ? '1px solid #02B694' : 'none',
        borderRadius: '8px',
        color: type === 0 ? '#02B694' : '#fff',
        backgroundColor: type === 0 ? 'transparent' : '#02B694',
      }}
      className="flex-center h-8 w-full cursor-pointer md:h-13 md:w-47"
    >
      {text}
    </button>
  );
}
