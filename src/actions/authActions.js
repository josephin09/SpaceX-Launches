import { LOGIN_SUCCESS, LOGIN_FAIL, SIGNUP_SUCCESS, SIGNUP_FAIL } from './types';

export const signup = (userData) => async (dispatch) => {
  try {
    console.log('Dispatching signup action');
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      const data = await response.json();
      dispatch({ type: SIGNUP_SUCCESS, payload: data });
      console.log('Signup successful', data);
      return true;
    } else {
      const error = await response.text();
      dispatch({ type: SIGNUP_FAIL, payload: error });
      console.log('Signup failed', error);
      return false;
    }
  } catch (error) {
    dispatch({ type: SIGNUP_FAIL, payload: error.message });
    console.log('Signup error', error.message);
    return false;
  }
};

export const login = (userData) => async (dispatch) => {
  try {
    console.log('Dispatching login action');
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      const data = await response.json();
      dispatch({ type: LOGIN_SUCCESS, payload: data });
      console.log('Login successful', data);
      return true;
    } else {
      const error = await response.text();
      dispatch({ type: LOGIN_FAIL, payload: error });
      console.log('Login failed', error);
      return false;
    }
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.message });
    console.log('Login error', error.message);
    return false;
  }
};






