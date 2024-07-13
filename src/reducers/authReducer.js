import { LOGIN_SUCCESS, LOGIN_FAIL, SIGNUP_SUCCESS, SIGNUP_FAIL, LOGOUT } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return { ...state, isAuthenticated: true, user: action.payload, error: null };
    case LOGIN_FAIL:
    case SIGNUP_FAIL:
    case LOGOUT:
      return { ...state, isAuthenticated: false, user: null, error: action.payload };
    default:
      return state;
  }
};

export default authReducer;
