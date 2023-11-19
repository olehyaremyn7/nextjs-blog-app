import prisma from '@/db/connect';
import { getAuthSession } from '@/utils/authorization';

// GET ALL COMMENTS OF A POST
export const fetchComments = async (postSlug) => {
  try {
    return prisma.comment.findMany({
      where: {
        ...(postSlug && { postSlug }),
      },
      include: { user: true },
    });
  } catch (e) {
    throw new Error('Failed to fetch comments. Please try again later.');
  }
};

// CREATE A COMMENT
export const createComment = async (comment) => {
  try {
    const session = await getAuthSession();

    if (!session) {
      throw new Error('401 Not Authenticated');
    }

    return prisma.comment.create({
      data: { ...comment, userEmail: session.user.email },
    });
  } catch (e) {
    throw new Error('Failed to create a new comment. Please check your input and try again.');
  }
};
