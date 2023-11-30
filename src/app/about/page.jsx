import Image from 'next/image';
import Page from '@/components/UI/Page';
import PhotoGallery from '@/components/PhotoGallery';
import { getPageTitle, range } from '@/utils/index';
import { BLOG_NAME } from '@/constants/index';
import { COMMUNITY_PHOTO, CORE_VALUES, FEEDBACKS, KEY_FEATURES, TEAM_PHOTO } from './data';
import styles from './About.module.css';

const PhotoBlock = ({ subject }) => (
  <div className={styles.photos}>
    {range(0, 3).map((i) => (
      <figure key={`${subject}-photo-${i}`} className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="ocean banner image" fill className={styles.image} />
      </figure>
    ))}
  </div>
);

export const metadata = {
  title: getPageTitle('About us'),
};

const AboutPage = () => (
  <Page title="About us" forceFocus capitalize>
    <section className={styles.root}>
      <section className={styles.presentation}>
        <h2>Welcome to {BLOG_NAME}</h2>
        <p>
          Where Stories Unfold and Ideas Flourish!
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu neque odio. Maecenas vel massa erat. Sed
          sed magna finibus, accumsan nulla in, dignissim risus.
          <br />
          Nam metus ante, tincidunt tincidunt elementum at, molestie ac dui. Etiam feugiat mattis nisl, eu aliquam erat
          bibendum vel. Aenean sollicitudin nunc nec risus facilisis, ut interdum neque aliquet. Integer scelerisque
          ligula nunc, non malesuada dolor eleifend id.
        </p>
        <PhotoBlock subject="company" />
      </section>
      <section className={styles.presentation}>
        <h2>What is an {BLOG_NAME}?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu neque odio. Maecenas vel massa erat. Sed
          sed magna finibus, accumsan nulla in, dignissim risus. Vestibulum et mi nec orci tempor euismod. Maecenas
          placerat sem lorem, nec egestas ipsum faucibus at. Vivamus eget scelerisque risus. Aliquam dictum venenatis
          nulla at commodo. Mauris sollicitudin in eros sit amet euismod. Fusce blandit ligula aliquet ante
          sollicitudin, quis lacinia massa ullamcorper. Sed luctus turpis sit amet ex tempor, id efficitur massa
          elementum. Integer molestie dui eu odio pretium consequat eget sed ante. Sed vitae pellentesque nibh.
          Curabitur rutrum leo nulla, nec condimentum ipsum eleifend ac. Maecenas varius dui in nisl blandit, ornare
          blandit urna euismod. Proin vel fermentum metus. Pellentesque tincidunt sit amet tellus ut lacinia. Etiam
          vitae accumsan erat. Donec quis ante vulputate lectus sodales cursus sit amet at enim. Aliquam molestie
          iaculis nunc, sed volutpat metus placerat nec. Ut vitae arcu eu dolor gravida tincidunt vitae eu mauris.
        </p>
      </section>
      <section className={styles.presentation}>
        <h2>Our Story</h2>
        <p>
          Founded in 20XX, our {BLOG_NAME} company was conceived to empower voices and foster meaningful conversations.
          Nam rhoncus scelerisque ex, ac hendrerit nulla pharetra quis. Etiam tempus eget libero id rutrum. Nulla quis
          metus lectus. Morbi in suscipit est, a euismod nisi. Suspendisse sodales, est non feugiat pellentesque, nisi
          orci ullamcorper lacus, vel tempor nunc dolor non purus. Integer malesuada venenatis bibendum.
        </p>
        <p>
          We ave grown from a simple idea to a vibrant community of diverse creators and readers. Curabitur rutrum leo
          nulla, nec condimentum ipsum eleifend ac. Maecenas varius dui in nisl blandit, ornare blandit urna euismod.
          Proin vel fermentum metus.
        </p>
        <p>
          Together, we are building a platform that celebrates individuality and diverse perspectives. Pellentesque
          tincidunt sit amet tellus ut lacinia. Etiam vitae accumsan erat. Donec quis ante vulputate lectus sodales
          cursus sit amet at enim. Aliquam molestie iaculis nunc, sed volutpat metus placerat nec. Ut vitae arcu eu
          dolor gravida tincidunt vitae eu mauris.
        </p>
        <PhotoBlock subject="story" />
      </section>
      <section className={styles.presentation}>
        <h2>Our Mission</h2>
        <p>Our mission is to democratize content creation, providing a stage for every voice to be heard.</p>
        <p>
          We are dedicated to nurturing a safe and inclusive space for expression and exploration.
          <br />
          Curabitur rutrum leo nulla, nec condimentum ipsum eleifend ac. Maecenas varius dui in nisl blandit, ornare
          blandit urna euismod. Proin vel fermentum metus. Pellentesque tincidunt sit amet tellus ut lacinia. Etiam
          vitae accumsan erat. Donec quis ante vulputate lectus sodales cursus sit amet at enim. Aliquam molestie
          iaculis nunc, sed volutpat metus placerat nec. Ut vitae arcu eu dolor gravida tincidunt vitae eu mauris.
        </p>
        <p>
          Sed orci nunc, faucibus in odio condimentum, tristique consequat justo. Phasellus ultricies rhoncus mauris, at
          vestibulum nunc maximus et.
        </p>
      </section>
      <section className={styles.presentation}>
        <h2>Core Values</h2>
        <ul className={styles.coreValues}>
          {CORE_VALUES.map(({ id, title, description }) => (
            <li key={`core-value-${id}`} className={styles.coreValue}>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.presentation}>
        <h2>Key Features</h2>
        <p>Discover the array of features that make {BLOG_NAME} stand out:</p>
        <ul className={styles.features}>
          {KEY_FEATURES.map(({ id, title, description }) => (
            <li key={`key-feature-${id}`} className={styles.feature}>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.presentation}>
        <h2>Our Team</h2>
        <p>Meet the passionate minds steering our blog app to success.</p>
        <p>Our diverse team collaborates to provide a platform where creativity thrives.</p>
        <PhotoGallery classes={styles.gallery} subject="team" photos={TEAM_PHOTO} />
      </section>
      <section className={styles.presentation}>
        <h2>Join Our Community</h2>
        <p>Become a part of our community! Start sharing your stories and ideas with the world.</p>
        <p>Engage with fellow writers, explore a multitude of content, and be part of a supportive network.</p>
        <PhotoGallery classes={styles.gallery} subject="community" photos={COMMUNITY_PHOTO} />
      </section>
      <section className={styles.presentation}>
        <h2>Feedback and Improvement</h2>
        <p>We are committed to continuous improvement. Share your feedback to help us grow and evolve!</p>
        <p>Together, we will shape the future of our blog app.</p>
        <ul className={styles.feedbacks}>
          {FEEDBACKS.map(({ id, author, quote, title }) => (
            <li key={`feedback-${id}`} className={styles.feedback}>
              <h3>{title}</h3>
              <q>{quote}</q>
              <p>
                <em>{author}</em>
              </p>
            </li>
          ))}
        </ul>
      </section>
    </section>
  </Page>
);

export default AboutPage;
