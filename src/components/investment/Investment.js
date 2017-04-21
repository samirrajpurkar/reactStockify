import React from 'react';
import './Investment.css';

export const Investment = (props) => {
  return (
    <div className="Investment">
      <li>
        <span className="main">
          <input type="checkbox"
            onChange={() => props.handleToggle(props.id)}
            checked={props.isComplete}/>{props.name}
        </span>
        <span className="others">
          {props.price}
        </span>
        <span className="others">
          {props.category}
        </span>
      </li>
    </div>
  );
};

Investment.propTypes = {
  name: React.PropTypes.string.isRequired,
  isComplete: React.PropTypes.bool,
  id: React.PropTypes.number.isRequired
};