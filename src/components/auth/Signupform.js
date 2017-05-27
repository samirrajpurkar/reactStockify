import React, { PropTypes } from 'react';

export const Signupform = (props) => (
    <div>
      <form action="/" onSubmit={props.handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text"
                 placeholder="Your name "
                 name="username"
                 onChange={props.handleInputChange}
                 value={props.user.name}
          />

          <label>Password</label>
          <input type="password"
                 placeholder="password"
                 name="password"
                 onChange={props.handleInputChange}
                 value={props.user.password}
          />

          <input type="submit"
                 value="Submit"
          />

        </div>
      </form>
    </div>
);

Signupform.propTypes = {
  handleSubmit: PropTypes.func.isrequired,
  handleInputChange: PropTypes.func.isrequired,
  user: PropTypes.object.required
};
