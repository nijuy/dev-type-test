import html2canvas from 'html2canvas';

// ✅ 컨텐츠 캡쳐 후 이미지로 저장
const captureElement = async (element: HTMLElement | null) => {
  try {
    if (!element) return;

    const canvas = await html2canvas(element, {
      scale: 1,
      useCORS: true,
      allowTaint: true,
    });
    const img = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = img;
    link.download = '개발자 유형테스트 결과.png';
    link.click();
  } catch (error) {
    alert('잠시 후 다시 시도해 주세요!');
    console.log(error);
  }
};

export default captureElement;
