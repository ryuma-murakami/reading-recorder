import { beforeEach, describe, expect, it, vi } from 'vitest';
import { getAllReviews } from './review';
import prisma from '../prisma';

vi.mock('../prisma', () => ({
  default: {
    review: {
      findMany: vi.fn(),
    },
  },
}));

describe('review queries', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('getAllReviews', async () => {
    await getAllReviews();

    expect(prisma.review.findMany).toHaveBeenCalledWith({
      orderBy: {
        read: 'desc',
      },
    });
  });
});
