import prisma from './prisma';
import type { Book, BookApi, Review } from './types';

export async function getAllReviews(): Promise<Review[]> {
  return await prisma.reviews.findMany({
    orderBy: {
      read: 'desc',
    },
  });
}

const API_URL = 'https://www.googleapis.com/books/v1/volumes';

export async function getBooksByKeyword(keyword: string): Promise<Book[]> {
  const res = await fetch(
    `${API_URL}?q=${keyword}&langRestrict=ja&maxResults=20&printType=books`,
    { cache: 'no-store' },
  );
  const result = await res.json();

  const books: Book[] = [];
  for (const book of result.items) {
    books.push(createBook(book));
  }

  return books;
}

export function createBook(book: BookApi): Book {
  const authors = book.volumeInfo.authors;
  const price = book.saleInfo.listPrice;
  const imageLinks = book.volumeInfo.imageLinks;

  return {
    id: book.id,
    title: book.volumeInfo.title,
    author: authors ? authors.join(',') : '',
    price: price ? price.amount : 0,
    publisher: book.volumeInfo.publisher,
    published: book.volumeInfo.publishedDate,
    image: imageLinks?.smallThumbnail ?? '/vercel.svg',
  };
}
