import clsx from 'clsx';
import Link from 'next/link';
import Page from '@/components/UI/Page';
import { CONTACT_INFORMATION, CONTACT_OTHER_WAYS } from './data';
import { getPageTitle } from '@/utils/index';
import { SOCIAL_NETWORKS } from '@/constants/socialNetworks';
import styles from './Contact.module.css';

export const metadata = {
  title: getPageTitle('Contact us'),
};

const ContactPage = () => (
  <Page title="Contact us" forceFocus capitalize>
    <section className={styles.root}>
      <section className={styles.article}>
        <h2>Key features of our support team</h2>
        <p className={styles.features}>
          Etiam malesuada auctor nibh, dapibus venenatis erat sodales sed. Integer mi elit, ultricies vitae augue sed,
          dictum aliquet velit. Nulla facilisi. Pellentesque lorem arcu, dignissim quis felis eget, porta volutpat urna.
          Nulla quis massa arcu. Ut porttitor quam ligula, nec hendrerit dui ullamcorper vitae. Nulla facilisi.
          Phasellus rutrum egestas enim, non tincidunt tortor vestibulum et. Suspendisse potenti. Aliquam dapibus diam
          vel ex sagittis, et interdum nisi dignissim. Nulla facilisi. Donec ornare pharetra eros, ut tempor leo
          placerat id. Aenean dapibus consequat bibendum. Donec hendrerit porttitor scelerisque. Fusce ut auctor tellus.
          Maecenas eu eleifend neque. Maecenas pharetra fermentum velit, at elementum nunc. Nam eget ullamcorper ligula,
          a tempus nibh. Sed enim ipsum, interdum sed nibh vel, varius aliquet lorem. Sed accumsan, erat non laoreet
          malesuada, tortor orci aliquam augue, in suscipit dolor dui quis urna. Vestibulum at fringilla est, semper
          hendrerit tellus.
          <br />
          Quisque commodo tristique dui, eget bibendum libero porta ac. Vivamus tincidunt facilisis viverra. Cras ut
          purus urna. Etiam risus justo, dictum eu erat nec, mattis auctor nunc. Fusce ut auctor tellus. Maecenas eu
          eleifend neque. Maecenas pharetra fermentum velit, at elementum nunc. Nam eget ullamcorper ligula, a tempus
          nibh. Sed enim ipsum, interdum sed nibh vel, varius aliquet lorem.
          <br />
          Mauris finibus, quam ac pellentesque facilisis, orci magna dignissim nulla, vitae feugiat nisi tortor sed ex.
          Aenean pulvinar ullamcorper velit a malesuada.
        </p>
      </section>
      <section className={styles.article}>
        <h2>Have questions? Contact us!</h2>
        <p>
          Ut at vehicula arcu, vitae pretium nisi. Cras cursus ac lorem sit amet molestie. In in massa feugiat diam
          faucibus dictum. Vestibulum mollis condimentum elit, sed luctus risus condimentum eu. Nullam sed placerat dui.
          Vestibulum volutpat id nulla et mollis. In nec cursus quam.
        </p>
      </section>
      <section className={styles.contacts}>
        <div className={styles.contactInfo}>
          <h2>Contact Information</h2>
          <ul className={styles.contactInfoList}>
            {CONTACT_INFORMATION.map(({ id, method, contact, href, target, label }) => (
              <li key={`contact-info-${id}`}>
                <strong>{method}</strong>
                <span aria-hidden>:</span>{' '}
                <a href={href} target={target} aria-label={label}>
                  {contact}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.contactInfo}>
          <h2>Other Ways to Contact Us</h2>
          <p>Additionally, you can reach us through:</p>
          <ul className={styles.contactInfoList}>
            {CONTACT_OTHER_WAYS.map(({ id, method }) => (
              <li key={`other-contact-way-${id}`}>{method}</li>
            ))}
          </ul>
        </div>
        <div className={styles.contactInfo}>
          <h2>Follow Us</h2>
          <p>Connect with us on social media:</p>
          <ul className={clsx(styles.contactInfoList, styles.linkList)}>
            {SOCIAL_NETWORKS.map(({ id, link, label, title }) => (
              <li key={`social-network-${id}`}>
                <Link className={styles.link} href={link} target="_blank" aria-label={label}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className={styles.article}>
        <h2>Get in Touch</h2>
        <p>Feel free to reach out to us through the contact information provided above.</p>
      </section>
    </section>
  </Page>
);

export default ContactPage;
