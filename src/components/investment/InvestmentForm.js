import React from 'react';

export const InvestmentForm = (props) => (
            <form onSubmit={props.handleSubmit}>
              <input type="text"
                     name="somethingname"
                     onChange={props.handleInputChange}
                     value={props.currentInvestmentName}/>
            </form>
          );

InvestmentForm.propTypes = {
  currentInvestmentName: React.PropTypes.string.isRequired,
  handleInputChange: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func.isRequired
};