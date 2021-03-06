import * as UserActions from '../actions/UserActions';

export const signUp = (user) => {
  return {
    'type': UserActions.USER_SIGNUP,
    user: user
  }
};

export const login = (user) => {
  return {
    'type': UserActions.USER_LOGIN,
    user: user
  }
};

export const updateUser = (user) => {
  return {
    'type': UserActions.USER_UPDATE,
    user: user
  }
};