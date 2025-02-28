import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from 'next/font/google';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pressStart = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

export const metadata = {
  title: 'Marina Gatinha',
  description: 'Site especial para comemorar nosso aniversário de namoro',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={pressStart.className}>
      <body>{children}</body>
    </html>
  );
}
