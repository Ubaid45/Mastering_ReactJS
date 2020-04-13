import React, { Component } from "react";
import Input from "./input";
class Login extends Component {
  state = {
    account: { username: "", password: "" },
  };

  handleSubmit = (e) => {
    e.preventDefault(); // prevent the default bahviour. Submitting the page to server which cause a full reload
    // Call the server, save the changes ad redirects the user
    //const userName = this.userName.current.value;
    console.log("submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Username"
            type="text"
            value={account.username}
            onChange={this.handleChange}
          />
          <Input
            name="password"
            label="Password"
            type="password"
            value={account.password}
            onChange={this.handleChange}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}
export default Login;
