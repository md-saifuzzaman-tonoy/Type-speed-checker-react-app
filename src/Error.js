import React from 'react'
import {Link} from 'react-router-dom'

const Error = () => {
  return (
    <div className="container">
      <h1 className='header'>No such page exists</h1>
      <Link to="/type-speed-checker-react-app" className='btn'>please go back</Link>
    </div>
  );
}

export default Error