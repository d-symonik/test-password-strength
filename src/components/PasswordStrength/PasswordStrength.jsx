import React, {useContext, useEffect, useState} from 'react';

import Card from '../UI/Card/Card';
import Input from '../UI/Input/Input';
import PasswordTips from './PasswordTips/PasswordTips';

import PasswordContext from '../../store/PasswordContext/password-context';

import {EASY_PASSWORD, INCORRECT_PASSWORD, MEDIUM_PASSWORD, RESET, STRONG_PASSWORD,} from '../../constants/constants';

import classes from './PasswordStrength.module.scss';
import PasswordStatus from './PasswordStatus/PasswordStatus';

function PasswordStrength() {

    const passwordContext = useContext(PasswordContext);

    const {
        strength,
        error,
        dispatch,
    } = passwordContext;

    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const passwordInputType = showPassword ? 'text' : 'password';

    const checkingPasswordStrength = () => {
        const regex = {
            letters: /^[a-zA-Z]+$/,
            numbers: /^[0-9]+$/,
            symbols: /^[@$#!%*^?&-.=_+]+$/,
            lettersNumbersSymbols: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$#!%*?&-.=_+])[a-zA-Z\d@$#!%*^?&-.=_+]+$/,
        };

        if (password.length < 8) {
            dispatch({type: INCORRECT_PASSWORD, payload: 'The password must contain minimum 8 characters'});
            return;
        }
        if (password.includes(' ')) {
            dispatch({type: INCORRECT_PASSWORD, payload: 'The password must not contain spaces'});
            return;
        }
        if (regex.letters.test(password)
            || regex.numbers.test(password)
            || regex.symbols.test(password)) {
            dispatch({type: EASY_PASSWORD});
            return;
        }
        if (regex.lettersNumbersSymbols.test(password)) {
            dispatch({type: STRONG_PASSWORD});
        } else {
            dispatch({type: MEDIUM_PASSWORD});
        }
    };
    const resetPasswordData = () => {
        dispatch({type: RESET});
    };

    useEffect(() => {
        let timeout;
        if (password) {
            timeout = setTimeout(() => {
                checkingPasswordStrength();
            }, 700);
        } else {
            resetPasswordData();
        }
        return () => {
            clearTimeout(timeout);
        };
    }, [password]);

    const showPasswordHandler = () => {
        setShowPassword((prevState) => !prevState);
    };

    return (
        <Card className={classes['password-strength']}>
            <h1>Password Strength</h1>
            <PasswordTips/>
            <div className={classes['input-group']}>
                <Input
                    className={classes.checkbox}
                    label="Show password"
                    type="checkbox"
                    onChange={showPasswordHandler}
                />
                <Input
                    className={classes.input}
                    type={passwordInputType}
                    value={password}
                    onChange={setPassword}
                />

            </div>
            <PasswordStatus strength={strength} error={error}/>

            {error && <p className={classes.error}>{error}</p>}

        </Card>
    );
}

export default PasswordStrength;
