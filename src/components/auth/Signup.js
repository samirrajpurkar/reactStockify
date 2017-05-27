import React from 'react';
import {Signupform} from './Signupform';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    state = {
      user: {
        name: '',
        password: ''
      }
    };
  }
  handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('Submit Done');
  }

  handleInputChange = (evt) => {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  render() {
    return (
      <div>
        <Signupform
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
          user={this.state.user}
        />
      </div>
    );
  }
}