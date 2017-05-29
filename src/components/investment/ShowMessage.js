import React from 'react';

export const ShowMessage = (props) => (
      <div className="col">
        {props.errorMessage && <span className="error">{props.errorMessage}</span>}
        {props.message && <span className="success">{props.message}</span>}
      </div>
);

ShowMessage.propTypes = {
  errorMessage: React.PropTypes.string.isRequired,
  message: React.PropTypes.string.isRequired,
};