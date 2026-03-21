import Image from 'next/image';
import type { BookDetailsProps } from '@/types/bookDetails';

export default function BookDetails({ index, book }: BookDetailsProps) {
  return (
    <div className="mb-4 flex w-full">
      <div>
        <Image src={book.image} alt={book.title} width={128} height={163} />
      </div>
      <div>
        <ul className="ml-4 text-black">
          <li>{index && index + '.'}</li>
          <li>
            {book.title} ({book.price}円)
          </li>
          <li>{book.author}</li>
          <li>{book.publisher}刊</li>
          <li>{book.published} 発売</li>
        </ul>
      </div>
    </div>
  );
}
