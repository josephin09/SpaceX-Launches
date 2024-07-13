import React from 'react';
import './LaunchItem.css';

const LaunchItem = ({ launch }) => {
  return (
    <div className="launch-item">
      <img src={launch.links.mission_patch} alt={launch.mission_name} />
      <h3>{launch.mission_name}</h3>
      <p>{new Date(launch.launch_date_local).toLocaleDateString()}</p>
      <p>Rocket: {launch.rocket.rocket_name}</p>
      <p>Launch Site: {launch.launch_site.site_name}</p>
    </div>
  );
};

export default LaunchItem;


