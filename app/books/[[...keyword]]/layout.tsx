'use client';

import { useRouter } from 'next/navigation';
import { type SubmitEvent, useRef } from 'react';
import type { LayoutProps } from '@/types/layout';

export default function BooksLayout({ children }: LayoutProps) {
  const router = useRouter();
  const keywordRef = useRef<HTMLInputElement>(null);
  const handleSearch = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/books/${encodeURIComponent(keywordRef.current!.value)}`);
  };

  return (
    <>
      <form className="mt-2 mb-4" onSubmit={handleSearch}>
        <input
          type="text"
          ref={keywordRef}
          className="mr-2 rounded border border-gray-600 bg-gray-100 px-2 py-2 text-black focus:border-red-500 focus:bg-white focus:outline-none"
        />
        <button
          type="submit"
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-500"
        >
          検索
        </button>
      </form>
      <hr />
      {children}
    </>
  );
}
