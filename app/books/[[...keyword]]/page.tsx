import LinkedBookDetails from '@/components/LinkedBookDetails';
import { getBooksByKeyword } from '@/lib/services/book';

type Props = {
  params: Promise<{ keyword?: string[] }>;
};

export default async function Page({ params }: Props) {
  const { keyword = ['React'] } = await params;
  const books = await getBooksByKeyword(keyword[0]);

  return books.map((book, index) => (
    <LinkedBookDetails book={book} index={index + 1} key={book.id} />
  ));
}
