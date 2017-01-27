/**
 * Created by moksha on 26/01/17.
 */

// see what happens if you remove the following import
import React from 'react';
import Style from './Card.css';

const Card = ({title, content}) => {
  return (
    <div className="cardContainer">
      <label className="title">{title}</label>
      <p>{content}</p>
    </div>
  )
};

export default Card;