import prisma from '@/db/connect';

// GET ALL CATEGORIES
export const fetchCategories = async (resolver = null) => {
  try {
    const categories = await prisma.category.findMany();

    if (resolver) {
      return resolver(categories);
    }

    return categories;
  } catch (e) {
    throw new Error('Failed to fetch categories. Please try again later.');
  }
};
