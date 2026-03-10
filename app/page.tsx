import LinkedBookDetails from '@/components/LinkedBookDetails';
import { getAllReviews } from '@/lib/queries/review';

export default async function Page() {
  'use cache';

  const reviews = await getAllReviews();

  return reviews.map((book, index) => (
    <LinkedBookDetails book={book} index={index + 1} key={book.id} />
  ));
}
