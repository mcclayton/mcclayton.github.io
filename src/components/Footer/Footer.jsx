import React from 'react';
import PT from 'prop-types';
import rocket from '../../images/rocket_emoji.png';
import styles from './styles.module.scss';

const Footer = ({ timeout }) => (
  <footer id="footer" style={timeout ? { display: 'none' } : {}}>
    <ul className="icons">
      <li>
        <a
          href="https://www.linkedin.com/in/michaelcclayton/"
          className="icon fa-linkedin"
        >
          <span className="label">LinkedIn</span>
        </a>
      </li>
      <li>
        <a href="https://github.com/mcclayton" className="icon fa-github">
          <span className="label">GitHub</span>
        </a>
      </li>
    </ul>
    <div className={styles.sourceCodeContainer}>
      View This Site's{' '}
      <a href="https://github.com/mcclayton/mcclayton.github.io">Source Code</a>
      <img className={styles.emojiImage} src={rocket} alt="Rocket Emoji" />
    </div>
  </footer>
);

Footer.propTypes = {
  timeout: PT.bool,
};

export default Footer;
