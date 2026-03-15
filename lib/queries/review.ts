import prisma from '../prisma';
import type { Review } from '@/types/review';

export async function getAllReviews(): Promise<Review[]> {
  return await prisma.review.findMany({
    orderBy: {
      read: 'desc',
    },
  });
}

export async function getReviewById(id: string): Promise<Review | null> {
  return await prisma.review.findUnique({
    where: { id },
  });
}
