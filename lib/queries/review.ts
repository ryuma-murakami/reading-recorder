import prisma from '../prisma';
import type { Review } from '@/types/review';

export async function getAllReviews(): Promise<Review[]> {
  return await prisma.review.findMany({
    orderBy: {
      read: 'desc',
    },
  });
}
