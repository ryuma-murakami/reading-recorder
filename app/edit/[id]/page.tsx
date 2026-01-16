import BookDetails from '@/components/BookDetails';
import EditForm from '@/components/EditForm';
import { getBookById, getReviewById } from '@/lib/getters';
import type { EditPageProps } from '@/lib/types';

export default async function EditPage({ params }: EditPageProps) {
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
