import type { Metadata } from 'next';
import './globals.css';


export const metadata: Metadata = {
  title: '개발자 유형테스트',
  description: '어떤 개발자인지 확인해보세요!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className='antialiased bg-slate-800'
      >
        {children}
      </body>
    </html>
  );
}
