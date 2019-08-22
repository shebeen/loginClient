import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);
  }

render(){
    return(
        <form onSubmit={this.props.handleSubmit}>
          <h3>Sign in</h3>
          <input type="text" name="username" placeholder="enter you username" />
          <input type="password" name="password" placeholder="enter password" />
          <input type="submit" value="Login" />
          {this.props.failure && <p>Invalid username or password</p>}
        </form>
      );
}
}