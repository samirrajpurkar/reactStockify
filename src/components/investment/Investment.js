import React from 'react';
import './Investment.css';
import {partial} from '../../lib/utils';

export const Investment = (props) => {
  //const handleToggle = () => props.handleToggle(props.id);
  //const handleToggle = props.handleToggle.bind(null, props.id);
  const handleToggle = partial(props.handleToggle, props.id);
  return (
    <div className="Investment">
      <li>
        <span className="main">
          <input type="checkbox"
            onChange={handleToggle}
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