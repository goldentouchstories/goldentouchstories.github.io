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
      {/* <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </head> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
