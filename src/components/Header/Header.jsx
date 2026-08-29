import PropTypes from 'prop-types';
import React from 'react';
import { ARTICLE_IDS } from '../../constants';
import Button from '../Button';
import InitialsLogo from '../InitialsLogo';
import Avatar from '../Avatar';
import styles from './styles.module.scss';

const Header = (props) => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="content">
      <div className="inner">
        <InitialsLogo size={200} />
        <h1>Michael C. Clayton</h1>
        <div className={styles.avatarContainer}>
          <Avatar />
        </div>
        <p>
          "If you don’t work on important problems, it’s not likely that you’ll
          do important work." —Richard Hamming
        </p>
      </div>
    </div>
    <nav>
      <ul>
        {Object.entries(ARTICLE_IDS).map(([title, id]) => (
          <li key={id}>
            <Button onClick={() => props.onOpenArticle(id)}>{title}</Button>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
};

export default Header;
