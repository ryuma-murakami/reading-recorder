import LinkedBookDetails from '@/components/LinkedBookDetails';
import { getBooksByKeyword } from '@/lib/getters';
import type { BookResultProps } from '@/lib/types';

export default async function BookResult({ params }: BookResultProps) {
  const { keyword = ['React'] } = await params;
  const books = await getBooksByKeyword(keyword[0]);

  return books.map((book, index) => (
    <LinkedBookDetails book={book} index={index + 1} key={book.id} />
  ));
}
