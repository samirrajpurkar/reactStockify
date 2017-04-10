import React from 'react';

export const InvestmentForm = (props) => (
            <form onSubmit={props.handleSubmit}>
              <input type="text"
                     onChange={props.handleInputChange}
                     value={props.currentInvestment}/>
            </form>
          );

InvestmentForm.propTypes = {
  currentInvestment: React.PropTypes.string.isRequired,
  handleInputChange: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func.isRequired
};