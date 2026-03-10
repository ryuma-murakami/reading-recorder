import type { Book } from './book';

export type Review = Book & {
  read: Date;
  memo: string;
};
