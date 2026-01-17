import type { ReactNode } from 'react';

export type Book = {
  id: string;
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

export type BookApi = {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    imageLinks: {
      smallThumbnail: string | null;
    };
  };
  saleInfo: {
    listPrice: {
      amount: number;
    };
  };
};

export type LayoutProps = {
  children: ReactNode;
};

export type BookResultProps = {
  params: Promise<{
    keyword?: string[];
  }>;
};

export type EditPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export type BookDetailsProps = {
  index?: number;
  book: Book;
};

export type EditFormProps = {
  review: {
    id: string;
    read: string;
    memo?: string;
  };
};
