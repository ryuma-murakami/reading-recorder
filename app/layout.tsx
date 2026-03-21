import Link from 'next/link';
import { Inconsolata } from 'next/font/google';
import type { Metadata } from 'next';
import type { LayoutProps } from '@/types/layout';
import './globals.css';

const font = Inconsolata({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Reading Recorder',
  description: '自分が読んだ書籍の記録を残すためのアプリ',
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="ja">
      <body className={font.className}>
        <h1 className="my-2 text-4xl font-bold text-indigo-800">
          Reading Recorder
        </h1>
        <nav>
          <ul className="mb-4 flex bg-blue-600 pl-2">
            <li className="my-1 rounded px-4 py-2 hover:bg-gray-100">
              <Link className="text-blue-300 no-underline" href="/">
                Home
              </Link>
            </li>
            <li className="my-1 rounded px-4 py-2 hover:bg-gray-100">
              <Link className="text-blue-300 no-underline" href="/books">
                Search
              </Link>
            </li>
            <li className="my-1 rounded px-4 py-2 hover:bg-gray-100">
              <a
                className="text-blue-300 no-underline"
                href="https://wings.msn.to/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Support
              </a>
            </li>
          </ul>
        </nav>
        <div className="ml-2">{children}</div>
      </body>
    </html>
  );
}
