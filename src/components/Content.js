import React from 'react';
import './Content.css'

const Content = ({ name, regno, marked, onCheckboxChange }) => {
  const changeHandler = () => {
    onCheckboxChange();
  };

  return (
    <div className='row'>
      <div className='col col-lg-4 col-md-4 col-sm-4'>
        <p className='content-size'>{name}</p>
      </div>
      <div className='col col-lg-4 col-md-4 col-sm-4'>
        <p className='content-size'>{regno}</p>
      </div>
      <div className='col col-lg-4 col-md-4 col-sm-4'>
        <input type='checkbox' className='checkbox' checked={marked} onChange={changeHandler} />

      </div>
    </div>
  );
};

export default Content;
