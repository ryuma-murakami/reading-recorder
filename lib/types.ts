import type { ReactNode } from 'react';

export type Book = {
  id: number;
  title: string;
  author: string;
  price: number;
  publisher: string;
  published: string;
  image: string;
};

export type Review = Book & {
  read: Date;
  memo: string;
};

export type LayoutProps = {
  children: ReactNode;
};

export type BookDetailsProps = {
  index?: number;
  book: Book;
};
