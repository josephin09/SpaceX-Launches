import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLaunches } from '../../actions/launchActions';
import LaunchItem from './LaunchItem';
import Filters from './Filters';
import SearchBar from './SearchBar';
import './LaunchesList.css';

const LaunchesList = () => {
  const dispatch = useDispatch();
  const launches = useSelector(state => state.launches.launches);

  useEffect(() => {
    dispatch(fetchLaunches());
  }, [dispatch]);

  return (
    <div className="launches">
      <h2>SpaceX Launches</h2>
      <SearchBar />
      <Filters />
      
      <div className="launch-list">
        {launches.map(launch => (
          <LaunchItem key={launch.flight_number} launch={launch} />
        ))}
      </div>
    </div>
  );
};

export default LaunchesList;
