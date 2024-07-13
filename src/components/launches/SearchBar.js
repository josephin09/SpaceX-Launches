import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchLaunches } from '../../actions/launchActions';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    dispatch(searchLaunches(e.target.value));
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search by title..."
      />
    </div>
  );
};

export default SearchBar;
