import type { Book } from '@/types/book';
import type { BookApi } from '@/types/bookApi';

const API_URL = 'https://www.googleapis.com/books/v1/volumes';
const key = process.env.GOOGLE_BOOKS_API_KEY;

export async function getBooksByKeyword(keyword: string): Promise<Book[]> {
  const response = await fetch(
    `${API_URL}?q=${encodeURIComponent(keyword)}&key=${key}&langRestrict=ja&maxResults=20&printType=books`,
    { cache: 'no-store' },
  );
  const data: { items?: BookApi[] } = await response.json();

  return (data.items ?? []).map(item => createBook(item));
}

export async function getBookById(id: string): Promise<Book> {
  const response = await fetch(`${API_URL}/${id}`, { cache: 'no-store' });
  const data: BookApi = await response.json();

  return createBook(data);
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
