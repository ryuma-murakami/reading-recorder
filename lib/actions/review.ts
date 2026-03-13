'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { getBookById } from '../services/book';
import prisma from '../prisma';

export async function addReview(formData: FormData) {
  const id = formData.get('id') as string;

  const book = await getBookById(id);

  const input = {
    title: book.title,
    author: book.author,
    price: book.price,
    publisher: book.publisher,
    published: book.published,
    image: book.image,
    read: new Date(formData.get('read') as string),
    memo: formData.get('memo') as string,
  };

  await prisma.review.upsert({
    where: { id },
    update: input,
    create: {
      id,
      ...input,
    },
  });

  revalidatePath('/');
  redirect('/');
}

export async function removeReview(formData: FormData) {
  await prisma.review.delete({
    where: {
      id: formData.get('id') as string,
    },
  });

  revalidatePath('/');
  redirect('/');
}
