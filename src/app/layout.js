import './globals.css';
import { Inter } from 'next/font/google';
import Favicon from './favicon.ico';
import AppleFavicon from './apple-touch-icon.png';
import Favicon32 from './favicon-32x32.png';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Goldentouch Stories',
  description: 'SeyedAli Peyghambari & Analy Goldentouch',
  keywords: ['Goldentouch Stories'],
  authors: [{ name: 'Seyedali Peyghambari' }, { name: 'Analy Goldentouch' }],
  applicationName: 'Goldentouch Stories',
  creator: 'Sobhan Esfandyari',
  icons: [
    { rel: 'icon', url: Favicon.src },
    { rel: 'apple-touch', url: AppleFavicon.src },
    { rel: 'icon', url: Favicon32.src },
  ],
  // icons: {
  //   icon: { url: Favicon.src },
  //   apple: { url: AppleFavicon.src },
  //   shortcut: { url: Favicon32.src },
  // other: {
  //   rel: { url: Favicon32.src },
  // },
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{ backgroundRepeat: 'no-repeat', width: '100%', height: '100%' }}
      >
        {children}
      </body>
    </html>
  );
}
