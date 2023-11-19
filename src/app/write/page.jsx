import Page from '@/components/UI/Page';
import CreatePostForm from '@/components/CreatePostForm';
import { categoryService } from '@/services/index';
import { transformCategoriesToSelectOptions } from './utils';
import { getPageTitle, isArrayEmpty } from '@/utils/index';
import styles from './WritePage.module.css';

const { fetchCategories } = categoryService;

export const metadata = {
  title: getPageTitle('Write article'),
};

const WritePage = async () => {
  const categories = await fetchCategories(transformCategoriesToSelectOptions);

  if (!isArrayEmpty(categories)) {
    throw new Error('Categories are not available');
  }

  return (
    <Page classes={styles.root}>
      <CreatePostForm categories={categories} />
    </Page>
  );
};

export default WritePage;
