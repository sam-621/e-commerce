import React from 'react';
import '../../styles/molecules/searcher.css';

import SearchIcon from '../../svg/search.svg';

const Searcher = () => {
  return (
    <div className="Searcher">
      <form className="Searcher-form">
        <label>
          <input type="text" placeholder="Search..." />
        </label>
        <div className="Searcher-form-submit">
          <img src={SearchIcon} alt="Search icon" width="25px" height="25px" />
        </div>
      </form>
    </div>
  );
};

export default Searcher;
