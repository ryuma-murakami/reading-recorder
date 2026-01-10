import { getAllReviews } from '@/lib/getters';
import LinkedBookDetails from '@/components/LinkedBookDetails';

export default async function Home() {
  'use cache';

  const reviews = await getAllReviews();

  return reviews.map((book, index) => (
    <LinkedBookDetails book={book} index={index + 1} key={book.id} />
  ));
}
