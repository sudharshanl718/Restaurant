import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const searchHandle = (event) => {
    event.preventDefault();
    if (keyword) {
      navigate('/search?keyword=' + keyword);
    } else {
      navigate('/');
    }
  };

  return (
    <div>
      <form className="d-flex" role="search" onSubmit={searchHandle}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button className="btn btn-outline-success" type="submit">
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default Search;