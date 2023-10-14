import './globals.css';
import { Inter } from 'next/font/google';
import Favicon from './favicon-16x16.png';
import AppleFavicon from './apple-touch-icon.png';
import Favicon32 from './favicon-32x32.png';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Golden Touchstories',
  description: 'SeyedAli Peyghambari & Analy Goldentouch',
  icons: [
    { rel: 'icon', url: Favicon.src },
    { rel: 'apple-touch', url: AppleFavicon.src },
    { rel: 'icon', url: Favicon32.src },
  ],
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
