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
