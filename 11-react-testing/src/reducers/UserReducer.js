import * as UserActions from '../actions/UserActionTypes';


const initialState = {users: []};

export default (prevState = initialState, action) => {
  console.log(action);
  switch (action.type) {

    case UserActions.USER_SIGNUP:
      let users = prevState.users;
      users.push(action.user);
      return Object.assign({}, prevState, {users}, {userSignedUp: true});

    case UserActions.USER_LOGIN:
      let loggedInUser = prevState.users.filter(user => user.email === action.user.email && user.password === action.user.password);
      return Object.assign({}, prevState, {isAuthenicated: loggedInUser.length > 0 ? true : false});

    default:
      return prevState;
  }
}