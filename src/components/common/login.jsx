import React, { Component } from "react";
class Login extends Component {
  userName = React.createRef();
  handleSubmit = (e) => {
    e.preventDefault(); // prevent the default bahviour. Submitting the page to server which cause a full reload
    // Call the server, save the changes ad redirects the user
    const userName = this.userName.current.value;
    console.log("username : " + userName);
  };
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              ref={this.userName}
              autoFocus
              id="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" className="form-control" />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}
export default Login;
