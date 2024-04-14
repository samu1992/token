import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'

const myFont = localFont({
  src: '../assets/font/neueRegular.otf',
  display: 'swap',
})


export const metadata: Metadata = {
  title: "Token page",
  description: "By Samuel Carrizo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
