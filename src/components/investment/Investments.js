import React from 'react';
import {Investment} from './Investment';

export const Investments = (props) => {
  return (
          <div className="Stockify-List">
            <ul>
              {props.investments.map(investment =>
                <Investment key={investment.id} {...investment}/>
                )
              }
            </ul>
          </div>
  );
};

Investments.propTypes = {
  investments: React.PropTypes.array.isRequired
};