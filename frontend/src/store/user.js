import { csrfFetch } from './csrf';

const GET_USERS = 'users/GET_USERS';
const GET_ONE_USER = 'users/GET_ONE_USER';

export const getUsers = (users) => {
  return {
    type: GET_USERS,
    payload: users,
  };
};

export const getOneUser = (user) => {
  return {
    type: GET_ONE_USER,
    payload: user,
  };
};

export const fetchUsersThunk = () => async (dispatch) => {
  const res = await csrfFetch('/api/users');

  if (res.ok) {
    const users = await res.json();
    dispatch(getUsers(users));
    return users;
  }
  return res;
};

export const fetchOneUserThunk = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/users/${id}`);

  if (res.ok) {
    const user = await res.json();
    dispatch(getOneUser(user));
    return user;
  }
  return res;
};

const initialState = {};

const usersReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_USERS:
      //   action.payload.forEach((user) => {
      //     newState[user.id] = user;
      //   });
      newState = action.payload;
      return newState;
      case GET_ONE_USER:
      newState = action.payload;
      return newState;
    default:
      return state;
  }
};

export default usersReducer;
