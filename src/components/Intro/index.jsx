'use client';

import { memo, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Skeleton from '../UI/Skeleton';
import Title from '../UI/Title';
import { delay } from '@/utils/index';
import { INTRO_TITLE_WORDS } from './data';
import styles from './Intro.module.css';

const Button = dynamic(() => import('@/components/UI/Button'), {
  loading: () => <Skeleton animation="wave" variant="rounded" height={48} width={130} />,
});

const Intro = () => {
  const [typewriterText, setTypewriterText] = useState('');
  const [hideCursor, setHideCursor] = useState(false);

  const typewriterEffect = async () => {
    let currentWordIndex = 0;

    while (true) {
      const currentWord = INTRO_TITLE_WORDS[currentWordIndex];

      for (let i = 0; i < currentWord.length; i++) {
        setTypewriterText(currentWord.substring(0, i + 1));

        await delay(100);
      }

      await delay(500);

      if (currentWordIndex >= INTRO_TITLE_WORDS.length - 1) {
        setHideCursor((prevState) => !prevState);

        break;
      }

      currentWordIndex++;
    }
  };

  useEffect(() => {
    typewriterEffect();
  }, []);

  return (
    <>
      <Title classes={styles.title}>
        <b>Hey, Oleh Yaremyn here!</b> {typewriterText}
        {!hideCursor && <span className={styles.cursor}>|</span>}
      </Title>
      <article className={styles.post}>
        <figure className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="ocean banner image" fill className={styles.image} />
        </figure>
        <div className={styles.textContainer}>
          <h2 className={styles.postTitle}>Simple Ways to Inspire Your Inner Innovator</h2>
          <p className={styles.postDesc}>
            Whether you are an aspiring artist, a curious thinker, or simply looking to add a touch of creativity to
            your routine, our journey together will remind you that creativity knows no bounds. Get ready to unlock a
            world of innovation and self-expression!
          </p>
          <Button text="Read More" title="Read more" ariaLabel="Read more" />
        </div>
      </article>
    </>
  );
};

export default memo(Intro);
