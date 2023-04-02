import React, {useRef} from 'react';

import classes from './PasswordStatus.module.scss';
import {EASY_PASSWORD, MEDIUM_PASSWORD, STRONG_PASSWORD,} from '../../../constants/constants';

function PasswordStatus({ strength, error }) {
  const dotsGroup = useRef();

  const stylingDots = (color) => {
    if (dotsGroup.current) {
      [...dotsGroup.current.children].forEach((child) => {
        child.style.color = color;
      });
    }
  };
  if (dotsGroup) {
    if (error) {
      stylingDots('#ff0000');
    }
    if (strength === EASY_PASSWORD) {
      stylingDots('#565656');
      dotsGroup.current.children[0].style.color = '#ff0000';
    }
    if (strength === MEDIUM_PASSWORD) {
      stylingDots('#c1bf2b');
      dotsGroup.current.children[2].style.color = '#565656';
    }
    if (strength === STRONG_PASSWORD) {
      stylingDots('#46c81b');
    }
    if (strength === null && error === null) {
      stylingDots('#565656');
    }
  }

  return (

    <div ref={dotsGroup} className={classes['password-status']}>
      <span className={classes.span}>&#9711;</span>
      <span className={classes.span}>&#9711;</span>
      <span className={classes.span}>&#9711;</span>
    </div>

  );
}

export default React.memo(PasswordStatus);
