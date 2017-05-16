import React from 'react';
import {Investment} from './Investment';

export const Investments = (props) => {
  return (
          <div>
            <ul>
              {props.investments.map(investment =>
                <Investment
                handleRemove={props.handleRemove}
                handleToggle={props.handleToggle}
                key={investment.id} {...investment}/>
                )
              }
            </ul>
          </div>
  );
};

Investments.propTypes = {
  investments: React.PropTypes.array.isRequired
};