import React from 'react';

import Card from '../../UI/Card/Card';

import classes from './PasswordTips.module.scss';

function PasswordTips() {
  return (
    <Card className={classes['password-tips']}>
      <h2>If you want to make your password stronger:</h2>
      <p>Weak password : only letters / digits / symbols</p>
      <p>Medium password : the combination of letters-symbols / letters-digits / digits-symbols</p>
      <p>Strong password : has letters, symbols, and numbers</p>
    </Card>
  );
}

export default PasswordTips;
