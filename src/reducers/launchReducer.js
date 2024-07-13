import {
  FETCH_LAUNCHES_REQUEST,
  FETCH_LAUNCHES_SUCCESS,
  FETCH_LAUNCHES_FAILURE,
} from '../actions/types';

const initialState = {
  launches: [],
  loading: false,
  error: null,
};

const launchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LAUNCHES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_LAUNCHES_SUCCESS:
      return {
        ...state,
        launches: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_LAUNCHES_FAILURE:
      return {
        ...state,
        launches: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default launchReducer;



