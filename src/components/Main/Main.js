import PropTypes from 'prop-types';
import React, { useEffect, useCallback } from 'react';
import { ARTICLE_IDS } from '../../constants';
import Article from '../Article';
import Timeline from '../Timeline';
import ContactForm from '../ContactForm';
import CodeMemoji from '../CodeMemoji';
import wave from '../../images/wave_emoji.png';
import styles from './styles.module.scss';

const ESCAPE_KEY_VALUES = [27, 'Escape'];

const getKeyCode = (event) => event.key || event.keyIdentifier || event.keyCode;

function Main({
  article,
  articleTimeout,
  timeout,
  setWrapperRef,
  onCloseArticle,
}) {
  const escFunction = useCallback(
    (event) => {
      if (ESCAPE_KEY_VALUES.includes(getKeyCode(event))) {
        onCloseArticle();
      }
    },
    [onCloseArticle]
  );

  useEffect(() => {
    document.addEventListener('keyup', escFunction, false);
    return () => {
      document.removeEventListener('keyup', escFunction, false);
    };
  }, [escFunction]);

  const baseArticleProps = {
    article,
    timeout: articleTimeout,
    onClose: onCloseArticle,
  };
  return (
    <div
      ref={setWrapperRef}
      id="main"
      style={{ display: timeout ? 'flex' : 'none' }}
    >
      <Article
        title="Intro"
        id={ARTICLE_IDS.Intro}
        img={<CodeMemoji />}
        {...baseArticleProps}
      >
        <>
          <p>
            Hello there, I'm{' '}
            <span className={styles.attention}>Michael Clayton</span>!
            <img className={styles.waveEmoji} src={wave} alt="Wave Emoji" />
          </p>
          <blockquote>
            I graduated from Purdue University with a Bachelor of Science in
            Computer Science.
            <br />
            I crave learning and love a challenge.
            <br />I have a passion for software development and continually seek
            to push the boundaries of my knowledge and experience.
          </blockquote>
        </>
      </Article>

      <Article title="Career" id={ARTICLE_IDS.Career} {...baseArticleProps}>
        <div style={{ paddingBottom: '0.5rem' }}>
          {'View on '}
          <a href="https://www.linkedin.com/in/michaelcclayton/">LinkedIn</a>
        </div>
        <Timeline />
      </Article>

      <Article title="Contact" id={ARTICLE_IDS.Contact} {...baseArticleProps}>
        <blockquote>
          I seek opportunities to challenge my intellect, develop my
          professional career, and make an impact. If you have such an
          opportunity, or are interested in working with me, please reach out to
          me using the form below.
        </blockquote>
        <ContactForm />
      </Article>
    </div>
  );
}

Main.propTypes = {
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
};

export default Main;
