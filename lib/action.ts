'use server';

import { redirect } from 'next/navigation';
import prisma from './prisma';
import { getBookById } from './getters';
import { revalidatePath } from 'next/cache';

export async function addReview(formData: FormData) {
  const book = await getBookById(formData.get('id') as string);
  const input = {
    title: book.title,
    author: book.author,
    price: book.price,
    publisher: book.publisher,
    published: book.published,
    image: book.image || '',
    read: new Date(formData.get('read') as string),
    memo: formData.get('memo') as string,
  };

  await prisma.reviews.upsert({
    update: input,
    create: Object.assign({}, input, { id: formData.get('id') as string }),
    where: {
      id: formData.get('id') as string,
    },
  });

  revalidatePath('/');
  redirect('/');
}

export async function removeReview(formData: FormData) {
  await prisma.reviews.delete({
    where: {
      id: formData.get('id') as string,
    },
  });

  revalidatePath('/');
  redirect('/');
}
