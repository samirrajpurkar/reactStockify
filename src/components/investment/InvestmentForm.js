import React from 'react';
import './InvestmentForm.css';

export const InvestmentForm = (props) => (
            <form onSubmit={props.handleSubmit}>
              <div>
                <label>
                  Category
                </label>
                  <select
                         name="category"
                         onChange={props.handleInputChange}>
                    <option value="Equity">Equity</option>
                    <option value="Bond">Bond</option>
                    <option value="Commodities">Commodities</option>
                  </select>
              </div>

              <div>
                <label>
                  Price
                </label>
                  <input type="text"
                         name="price"
                         onChange={props.handleInputChange}
                         value={props.price}/>
              </div>
              <div>
                <label>
                  Investnemt Name
                </label>
                  <input type="text"
                         name="investmentName"
                         onChange={props.handleInputChange}
                         value={props.investmentName}/>
              </div>
              <div>
                <input type="submit" value="Submit" className="button" />
              </div>
            </form>
          );

InvestmentForm.propTypes = {
  price: React.PropTypes.string.isRequired,
  investmentName: React.PropTypes.string.isRequired,
  handleInputChange: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func.isRequired
};