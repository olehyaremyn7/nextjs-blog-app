import Page from '@/components/UI/Page';
import Intro from '@/components/Intro';
import CategoryList from '@/components/CategoryList';
import PostList from '@/components/PostList';
import Menu from '@/components/Menu';
import { getPageTitle } from '@/utils/index';

export const metadata = {
  title: getPageTitle('Home'),
};

const Home = ({ searchParams: { page } }) => (
  <Page>
    <Intro />
    <CategoryList />
    <section className="content">
      <PostList page={parseInt(page) || 1} />
      <Menu />
    </section>
  </Page>
);

export default Home;
