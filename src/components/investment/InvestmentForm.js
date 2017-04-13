import React from 'react';

export const InvestmentForm = (props) => (
            <form onSubmit={props.handleSubmit}>
              <div>
                <input type="text"
                       name="investmentName"
                       onChange={props.handleInputChange}
                       value={props.investmentName}/>
              </div>
              <div>
                <input type="text"
                       name="category"
                       onChange={props.handleInputChange}
                       value={props.category}/>
              </div>
              <div>
                <input type="submit" value="Submit" />
              </div>
            </form>
          );

// InvestmentForm.propTypes = {
//   currentInvestmentName: React.PropTypes.string.isRequired,
//   handleInputChange: React.PropTypes.func.isRequired,
//   handleSubmit: React.PropTypes.func.isRequired
// };