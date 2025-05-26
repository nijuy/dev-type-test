import type { Metadata } from 'next';
import CaptureContents from './components/CaptureContents';

export const metadata: Metadata = {
  title: '개발자 유형테스트 결과',
  description: '개발자 유형테스트 결과',
};

export default function ResultPage() {
  return (
    <main>
      <CaptureContents></CaptureContents>
    </main>
  );
}
