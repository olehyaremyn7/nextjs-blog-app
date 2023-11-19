import Image from 'next/image';
import Page from '@/components/UI/Page';
import Title from '@/components/UI/Title';
import UserInfo from '@/components/UserInfo';
import Menu from '@/components/Menu';
import Markdown from '@/components/UI/Markdown';
import Comments from '@/components/Comments';
import CommentList from '@/components/CommentList';
import { postService } from '@/services/index';
import { commentService } from '@/services/index';
import { getPageTitle, isArrayEmpty } from '@/utils/index';
import styles from './PostPage.module.css';

const { fetchPost } = postService;
const { fetchComments } = commentService;

const PostPage = async ({ params: { slug } }) => {
  const [{ user, title, createdAt, img, desc }, comments] = await Promise.all([fetchPost(slug), fetchComments(slug)]);

  return (
    <>
      <title>{getPageTitle(title)}</title>
      <Page>
        <section className={styles.infoContainer}>
          <div className={styles.textContainer}>
            <Title classes={styles.title} text={title} forceFocus />
            <UserInfo user={user} createdAt={createdAt} />
          </div>
          {img && (
            <figure className={styles.imageContainer}>
              <Image src={img} alt={`${title} article image`} fill className={styles.image} />
            </figure>
          )}
        </section>
        <section className={styles.content}>
          <div className={styles.post}>
            <Markdown className={styles.description} markdown={desc} />
            <Comments postSlug={slug} isComments={isArrayEmpty(comments)}>
              <CommentList comments={comments} />
            </Comments>
          </div>
          <Menu />
        </section>
      </Page>
    </>
  );
};

export default PostPage;
