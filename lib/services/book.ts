import type { Book } from '@/types/book';
import type { BookApi } from '@/types/bookApi';

const API_URL = 'https://www.googleapis.com/books/v1/volumes';

export async function getBooksByKeyword(keyword: string): Promise<Book[]> {
  const response = await fetch(
    `${API_URL}?q=${encodeURIComponent(keyword)}&langRestrict=ja&maxResults=20&printType=books`,
    { cache: 'no-store' },
  );
  const data: { items?: BookApi[] } = await response.json();

  return (data.items ?? []).map(item => createBook(item));
}

function createBook(item: BookApi): Book {
  const { volumeInfo, saleInfo } = item;

  return {
    id: item.id,
    title: volumeInfo.title,
    author: volumeInfo.authors?.join(',') ?? '',
    price: saleInfo.listPrice?.amount ?? 0,
    publisher: volumeInfo.publisher ?? '',
    published: volumeInfo.publishedDate ?? '',
    image: volumeInfo.imageLinks?.smallThumbnail ?? '/vercel.svg',
  };
}
