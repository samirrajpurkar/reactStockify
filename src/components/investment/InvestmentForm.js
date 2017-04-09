import React from 'react';

export const InvestmentForm = (props) => (
            <form>
              <input type="text"
                     onChange={props.handleInputChange}
                     value={props.currentInvestment}/>
            </form>
          );