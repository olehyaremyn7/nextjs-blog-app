import prisma from '@/db/connect';
import { getAuthSession } from '@/utils/authorization';
import { POST_PER_PAGE, MENU_POSTS_COUNT } from '@/constants/index';

// GET ALL POSTS
export const fetchPosts = async ({ page = null, cat = null, popular = null, editors = null, comments = null }) => {
  const query = {
    where: {
      ...(cat && { catSlug: cat }),
      ...(popular && { views: { gt: 0 } }),
      ...(editors && { editors: true }),
      ...(comments && { comments: { some: {} } }),
    },
    orderBy: {
      ...(popular && { views: 'desc' }),
      ...((page || editors) && { createdAt: 'desc' }),
      ...(comments && { comments: { _count: 'desc' } }),
    },
    ...(page && {
      take: POST_PER_PAGE,
      skip: POST_PER_PAGE * (page - 1),
    }),
    ...((popular || editors || comments) && {
      take: MENU_POSTS_COUNT,
      include: { user: true },
    }),
  };
  const transaction = [prisma.post.findMany(query)];

  if (page) {
    transaction.push(prisma.post.count({ where: query.where }));
  }

  try {
    const [posts, count] = await prisma.$transaction(transaction);

    return {
      posts,
      count,
    };
  } catch (e) {
    throw new Error('Failed to fetch posts. Please try again later.');
  }
};

// GET A COMMENT
export const fetchPost = async (slug) => {
  try {
    return prisma.post.update({
      where: { slug },
      data: { views: { increment: 1 } },
      include: { user: true },
    });
  } catch (e) {
    throw new Error('Post not found. Please check the post ID and try again.');
  }
};

// CREATE A POST
export const createPost = async (post) => {
  try {
    const session = await getAuthSession();

    if (!session) {
      throw new Error('401 Not Authenticated');
    }

    return prisma.post.create({
      data: { ...post, userEmail: session.user.email },
    });
  } catch (e) {
    throw new Error('Failed to create a new post. Please check your input and try again.');
  }
};
