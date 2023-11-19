import Image from 'next/image';
import Link from 'next/link';
import SocialNetworks from '../SocialNetworks';
import { BLOG_NAME } from '@/constants/index';
import { FOOTER_LINKS } from '@/constants/navigation';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.root}>
    <article className={styles.info}>
      <figure className={styles.logo}>
        <Image src="/logo.png" alt={`${BLOG_NAME} logo image`} width={50} height={50} />
        <span className={styles.logoText}>{BLOG_NAME}</span>
      </figure>
      <p className={styles.desc}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim necessitatibus similique aspernatur obcaecati
        veritatis. Aperiam cum porro sequi, totam minima consequuntur, aspernatur deleniti vero repellendus dorales.
      </p>
      <SocialNetworks classes={styles.socialList} width={20} height={20} />
    </article>
    <section className={styles.linksContainer}>
      {FOOTER_LINKS.map(({ id, title, links }) => (
        <div key={`footer-${title}-${id}`} className={styles.linksColumn}>
          <span className={styles.linkListTitle}>{title}</span>
          <ul className={styles.linkList}>
            {links.map(({ id, href, label, name }) => (
              <li key={`footer-social-network-${id}`} className={styles.linkListItem}>
                <Link href={href} className={styles.link} aria-label={label}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  </footer>
);

export default Footer;
