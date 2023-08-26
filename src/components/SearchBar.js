import React, { useState } from 'react';
import './SearchBar.css'

const SearchBar = ({ details }) => {
  const [filteredDetails, setFilteredDetails] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const inputHandler = (e) => {
    const searchText = e.target.value.toLowerCase();
    setInputValue(searchText);

    const filteredItems = details.filter((item) =>
      item.name.toLowerCase().includes(searchText)
    );

    setFilteredDetails(filteredItems);
  };

  return (
    <div>
      <input
        className='inp'
        placeholder='search student name...'
        value={inputValue}
        onChange={inputHandler}
      />

      
      {(filteredDetails.length > 0 && inputValue !== '') && (
        <div>
          {filteredDetails.map((item) => (
            <p key={item.id}>{item.name}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;


