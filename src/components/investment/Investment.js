import React from 'react';

export const Investment = (props) => {
  return (
    <li>
      <input type="checkbox" defaultChecked={props.isComplete}/>{props.name}
    </li>
  );
};

Investment.propTypes = {
  name: React.PropTypes.string.isRequired,
  isComplete: React.PropTypes.bool,
  id: React.PropTypes.number.isRequired
};