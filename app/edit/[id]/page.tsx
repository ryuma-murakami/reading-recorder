import BookDetails from '@/components/BookDetails';
import EditForm from '@/components/EditForm';
import { getReviewById } from '@/lib/queries/review';
import { getBookById } from '@/lib/services/book';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: Props) {
  const { id } = await params;
  const book = await getBookById(id);
  const review = await getReviewById(id);
  const read = (review?.read || new Date()).toLocaleDateString('sv-SE');

  return (
    <>
      <BookDetails book={book} />
      <hr />
      <EditForm review={{ id: book.id, read, memo: review?.memo }} />
    </>
  );
}
