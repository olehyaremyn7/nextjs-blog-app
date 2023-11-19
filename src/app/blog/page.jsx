import Page from '@/components/UI/Page';
import PostList from '@/components/PostList';
import Menu from '@/components/Menu';
import { capitalizeFirstLetter, getPageTitle } from '@/utils/index';

const BlogPage = ({ searchParams: { page, cat } }) => {
  const title = `${capitalizeFirstLetter(cat)} blog`;

  return (
    <>
      <title>{getPageTitle(title)}</title>
      <Page title={title} forceFocus capitalize>
        <section className="content">
          <PostList page={parseInt(page) || 1} cat={cat} />
          <Menu />
        </section>
      </Page>
    </>
  );
};

export default BlogPage;
