import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
const cx = classNames.bind(styles);

export const USER_TYPE = {
  ROBOT: 0,
  HUMAN: 1,
  NONE: 2,
};

// Hidden form field designed to catch robots
const HONEY_POT_FIELD = 'phone';

export function caughtRobotInHoneypot(modified, formData) {
  if (modified) {
    return true;
  }
  for (let pair of formData.entries()) {
    const [key, value] = pair;
    if (key === HONEY_POT_FIELD && !!value) {
      // Robot filled out honeypot field
      return true;
    }
  }
  return false;
}

export const HoneypotField = ({ onChange }) => {
  return (
    <div className="field">
      <input
        tabIndex={-1}
        aria-hidden="true"
        autoComplete="off"
        className={cx(styles.honeypotField)}
        type="text"
        name={HONEY_POT_FIELD}
        id={HONEY_POT_FIELD}
        onChange={onChange}
      />
    </div>
  );
};

const HumanVerifier = ({ userType, onChange }) => {
  function handleClick(type) {
    onChange(type);
  }

  function handleKeyDown(event, type) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick(type);
    }
  }

  return (
    <div>
      <div id="user-type-label">I am a:</div>
      <div role="radiogroup" aria-labelledby="user-type-label">
        <span
          className={cx([styles.userOption], {
            active: userType === USER_TYPE.ROBOT,
          })}
          role="radio"
          tabIndex={0}
          aria-checked={userType === USER_TYPE.ROBOT}
          onClick={() => handleClick(USER_TYPE.ROBOT)}
          onKeyDown={(event) => handleKeyDown(event, USER_TYPE.ROBOT)}
        >
          🤖 Robot
        </span>
        <span
          className={cx([styles.userOption], {
            active: userType === USER_TYPE.HUMAN,
          })}
          role="radio"
          tabIndex={0}
          aria-checked={userType === USER_TYPE.HUMAN}
          onClick={() => handleClick(USER_TYPE.HUMAN)}
          onKeyDown={(event) => handleKeyDown(event, USER_TYPE.HUMAN)}
        >
          👀 Human
        </span>
      </div>
    </div>
  );
};

export default HumanVerifier;
