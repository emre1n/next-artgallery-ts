import Footer from '@/components/layout/Footer';
import NavBar from '@/components/layout/NavBar';

import './globals.css';

import { lato, noto_serif } from './fonts';

export const metadata = {
  title: 'OA-Next',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${lato.variable} ${noto_serif.variable} relative flex flex-col items-center justify-center`}
    >
      <body className="flex min-h-screen w-full max-w-[1800px] flex-col items-center justify-between gap-8 overflow-x-hidden px-10 md:gap-16 md:px-20">
        <NavBar />
        <main className="w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
