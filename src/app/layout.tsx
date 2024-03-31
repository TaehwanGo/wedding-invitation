import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "우리 결혼합니다",
  description: "고태환, 김성진의 결혼 청첩장",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/font-kopub@1.0/kopubbatang.min.css"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
