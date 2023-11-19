import Page from '@/components/UI/Page';
import { getPageTitle } from '@/utils/index';
import { FAQ_DATA } from './data';
import styles from './Faq.module.css';

export const metadata = {
  title: getPageTitle('FAQ'),
};

const FaqPage = () => (
  <Page title="Frequently asked question" forceFocus capitalize>
    <section className={styles.root}>
      <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quisquam!</h2>
      <ol className={styles.questionsList}>
        {FAQ_DATA.map(({ id, question, answer }) => (
          <li key={`faq-question-${id}`}>
            <strong>{question}</strong>
            <br />
            {answer}
          </li>
        ))}
      </ol>
    </section>
  </Page>
);

export default FaqPage;
