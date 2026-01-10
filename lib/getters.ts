import prisma from './prisma';
import type { Review } from './types';

export async function getAllReviews(): Promise<Review[]> {
  return await prisma.reviews.findMany({
    orderBy: {
      read: 'desc',
    },
  });
}
