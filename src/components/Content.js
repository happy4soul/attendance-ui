import React from 'react';
import './Content.css'

const Content = ({ name, regno, marked, onCheckboxChange }) => {
  const changeHandler = () => {
    onCheckboxChange(); 
  };

  return (
    <div className='row'>
      <div className='col col-lg-4 col-md-4 col-sm-4'>
        {name}
      </div>
      <div className='col col-lg-4 col-md-4 col-sm-4'>
        {regno}
      </div>
      <div className='col col-lg-4 col-md-4 col-sm-4'>
        <input type='checkbox' className='checkbox' checked={marked} onChange={changeHandler} />
      </div>
    </div>
  );
};

export default Content;
