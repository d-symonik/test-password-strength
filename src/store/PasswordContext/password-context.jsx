import React, {useReducer} from 'react';
import {EASY_PASSWORD, INCORRECT_PASSWORD, MEDIUM_PASSWORD, RESET, STRONG_PASSWORD,} from '../../constants/constants';

const defaultPasswordValue = {
  strength: null,
  error: null,
  dispatch: () => {
  },
};
const PasswordContext = React.createContext(defaultPasswordValue);

const strengthReducer = (state, action) => {
  switch (action.type) {
    case EASY_PASSWORD: {
      return {
        ...state,
        strength: EASY_PASSWORD,
        error: null,
      };
    }
    case MEDIUM_PASSWORD: {
      return {
        ...state,
        strength: MEDIUM_PASSWORD,
        error: null,
      };
    }
    case STRONG_PASSWORD: {
      return {
        ...state,
        strength: STRONG_PASSWORD,
        error: null,
      };
    }
    case INCORRECT_PASSWORD: {
      return {
        ...state,
        strength: null,
        error: action.payload,
      };
    }
    case RESET: {
      return {
        strength: null, error: null,
      };
    }
    default:
      return state;
  }
};
export function PasswordProvider({ children }) {
  const [state, dispatch] = useReducer(strengthReducer, { strength: null, error: null });

  return (
    <PasswordContext.Provider value={{
      strength: state.strength,
      error: state.error,
      dispatch,
    }}
    >
      {children}
    </PasswordContext.Provider>
  );
}
export default PasswordContext;
