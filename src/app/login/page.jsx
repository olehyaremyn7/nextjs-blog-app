import Page from '@/components/UI/Page';
import Title from '@/components/UI/Title';
import Authorization from '@/components/Authorization';
import { getPageTitle } from '@/utils/index';
import styles from './LoginPage.module.css';

export const metadata = {
  title: getPageTitle('Login'),
};

const LoginPage = () => (
  <Page classes={styles.root}>
    <div className={styles.wrapper}>
      <Title classes={styles.title} text="Select a login method" forceFocus />
      <Authorization />
    </div>
  </Page>
);

export default LoginPage;
