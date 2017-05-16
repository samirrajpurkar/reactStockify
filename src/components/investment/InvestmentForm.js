import React from 'react';
import './InvestmentForm.css';

export const InvestmentForm = (props) => (
            <form onSubmit={props.handleSubmit}>
              <div className="form-group row">
                  <select className="form-control" id="category" name="category" onChange={props.handleInputChange}>
                    <option value="Equity">Equity</option>
                    <option value="Bond">Bond</option>
                    <option value="Commodities">Commodities</option>
                  </select>
              </div>

              <div>
                <div className="form-group row">
                    <input type="number"
                           name="price"
                           onChange={props.handleInputChange}
                           value={props.price}
                           className="form-control"
                           id="price"
                           placeholder="Cost Price example 100"
                           />
                </div>
              </div>
              <div>
                <div className="form-group row">
                    <input type="text"
                           name="investmentName"
                           onChange={props.handleInputChange}
                           value={props.investmentName}
                           className="form-control"
                           id="investmentName"
                           placeholder="Investment Name"
                           />
                </div>
              </div>

              <div>
                <div className="form-group row">
                    <input type="text"
                           name="invesment_code"
                           onChange={props.handleInputChange}
                           value={props.invesment_code}
                           className="form-control"
                           id="invesment_code"
                           placeholder="Investment Code"
                           />
                </div>
              </div>

              <div>
                <input type="submit" value="Submit" className="btn btn-secondary btn-sm" />
              </div>
            </form>
          );

InvestmentForm.propTypes = {
  price: React.PropTypes.string.isRequired,
  investmentName: React.PropTypes.string.isRequired,
  handleInputChange: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func.isRequired
};