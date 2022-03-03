import React from 'react';
import Body from './Body';
import "./Dashboard.css";

function Dashboard({ spotify }) {
  return (
    <div className='wrapperr'>
      <div className='dashboard'>
        <Body />
      </div>
    </div>
  )
}

export default Dashboard