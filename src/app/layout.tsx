import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

export const metadata: Metadata = {
  title: '개발자 유형테스트',
  description: '어떤 개발자인지 확인해보세요!',
  openGraph: {
    type: 'website',
    title: '개발자 유형 테스트',
    description: '어떤 개발자인지 확인해보세요!',
    siteName: '개발자 유형 테스트',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-slate-800 antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
