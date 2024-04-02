import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import KakaoScript from "@/components/KakaoScript";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "우리 결혼합니다",
  description: "고태환, 김성진의 결혼 청첩장",
};

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta property="og:title" content="우리 결혼해요" />
        <meta
          property="og:description"
          content="축하해주시는 모든분께 감사합니다"
        />
        <meta property="og:image" content="/images/cover.jpg" />
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/font-kopub@1.0/kopubbatang.min.css"
        />
      </head>
      <body className={inter.className}>
        <Providers>
          {children}
          {/* <KakaoScript /> */}
        </Providers>
      </body>
    </html>
  );
}
