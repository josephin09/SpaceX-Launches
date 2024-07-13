import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterLaunches } from '../../actions/launchActions';

const Filters = () => {
  const [year, setYear] = useState('');
  const [status, setStatus] = useState('');
  const dispatch = useDispatch();

  const handleFilter = () => {
    dispatch(filterLaunches({ year, status }));
  };

  const generateYears = () => {
    const years = [];
    const currentYear = new Date().getFullYear();
    for (let y = 2006; y <= currentYear; y++) {
      years.push(y);
    }
    return years;
  };

  const years = generateYears();

  return (
    <div className="filters">
      <label>
        Year:
        <select value={year} onChange={(e) => setYear(e.target.value)}>
          <option value="">All</option>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </label>
      <label>
        Status:
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">All</option>
          <option value="success">Success</option>
          <option value="fail">Fail</option>
        </select>
      </label>
      <button onClick={handleFilter}>Apply Filters</button>
    </div>
  );
};

export default Filters;

