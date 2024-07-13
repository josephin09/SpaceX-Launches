import {
  FETCH_LAUNCHES_REQUEST,
  FETCH_LAUNCHES_SUCCESS,
  FETCH_LAUNCHES_FAILURE,
} from './types';

const API_URL = 'https://api.spacexdata.com/v3/launches';

export const fetchLaunches = () => async (dispatch) => {
  dispatch({ type: FETCH_LAUNCHES_REQUEST });
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    dispatch({ type: FETCH_LAUNCHES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_LAUNCHES_FAILURE, payload: error.message });
  }
};

// Filter launches action
export const filterLaunches = (filters) => (dispatch, getState) => {
  const { launches } = getState().launches;
  let filteredLaunches = launches;

  if (filters.year) {
    filteredLaunches = filteredLaunches.filter(
      (launch) => new Date(launch.launch_date_local).getFullYear() === parseInt(filters.year)
    );
  }

  if (filters.status) {
    filteredLaunches = filteredLaunches.filter(
      (launch) => (filters.status === 'success' ? launch.launch_success : !launch.launch_success)
    );
  }

  dispatch({ type: FETCH_LAUNCHES_SUCCESS, payload: filteredLaunches });
};

export const searchLaunches = (searchTerm) => (dispatch, getState) => {
  const { launches } = getState().launches;
  const filteredLaunches = launches.filter(
    (launch) => launch.mission_name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  dispatch({ type: FETCH_LAUNCHES_SUCCESS, payload: filteredLaunches });
};








