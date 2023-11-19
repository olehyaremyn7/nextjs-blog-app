'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { commentService } from '@/services/index';
import { postService } from '@/services/index';
import { slugify } from '@/utils/index';

const { createComment } = commentService;
const { createPost } = postService;

export const createCommentAction = async (comment) => {
  await createComment(comment);

  revalidatePath(`/post/${comment.postSlug}`);
};

export const createPostAction = async (post) => {
  const { slug } = await createPost({
    ...post,
    slug: slugify(post.title),
  });

  redirect(`/post/${slug}`);
};
