import { Lato, Noto_Serif } from 'next/font/google';

export const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
});

export const noto_serif = Noto_Serif({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-serif',
});
