import React from 'react';
import { Link } from 'react-router-dom';

const Poem = ({ poem }) => {
  return (
    <div className="card">
      <div className="card-image"
        style={{ backgroundImage: `url(${poem.image})` }}
      ></div>
      <div className="card-content">
        <div className='columns is-mobile'>
          <div className='column is-three-quarters'>
            <h3><Link to={`/users/${poem.poet._id}`}>{poem.poet.username}</Link></h3>
            <p className="subtitle is-6">{poem.createdAtRelative}</p>
          </div>
          <div className='column is-one-quarter has-text-right'>
            <p><Link to={`/poems/${poem._id}`}><span className='dotdotdot'>&#8226;&#8226;&#8226;</span></Link><span>&#9734;</span></p>
          </div>
        </div>
        <div>
          <p> {poem.haiku[0].line1} </p>
          <p> {poem.haiku[0].line2} </p>
          <p> {poem.haiku[0].line3} </p>
          <p className='subtitle is-6'> {poem.haiku[0].attr} </p>
        </div>
      </div>
    </div>
  );
};

export default Poem;
