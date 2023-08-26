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

  

  const handleNameClick = (name) => {
    const index = details.findIndex((item) => item.name === name);
  
    if (index !== -1) {
      
      const id = name.toLowerCase().replace(/\s+/g, '-');
      
      
      document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    }
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
          {filteredDetails.map((item,index) => {

            const id = item.name.toLowerCase().replace(/\s+/g, '-')
            return (

            
            <p 
            key={item.id}
            onClick={() => handleNameClick(item.name)}
            id = {id}
            >{item.name}</p>
            )
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;


