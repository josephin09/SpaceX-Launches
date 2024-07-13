import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLaunches } from '../../actions/launchActions';
import LaunchItem from './LaunchItem';
import Filters from './Filters';
import SearchBar from './SearchBar';

const LaunchesList = () => {
  const dispatch = useDispatch();
  const launches = useSelector((state) => state.launches.launches);
  const loading = useSelector((state) => state.launches.loading);
  const error = useSelector((state) => state.launches.error);

  useEffect(() => {
    dispatch(fetchLaunches());
  }, [dispatch]);

  return (
    <div className="launches-list">
      <h1>SpaceX Launches</h1>
      <SearchBar />
      <Filters />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        launches.map((launch) => <LaunchItem key={launch.flight_number} launch={launch} />)
      )}
    </div>
  );
};

export default LaunchesList;
