import React from "react";
import "../App/App.css";
import Button from '../Button/Button';
import { UserContextConsumer } from "../../Contexts/UserContext";
class Login extends React.Component {
  render() {
    return (
      <UserContextConsumer>
        {({ handleLogin,email,pw,handleChange,changeForm }) => {
          return (
            <div className="formContainer">
              <div className="leftPane">
                <div>
                  Login
                  <div className="leftPaneDesc">
                    Login to get access to the products
                  </div>
                </div>
                <div>
                  <img src="/modalLeftPane.png" alt="Login / SignUp" />
                </div>
              </div>
              <div className="rightPane">
                <form
                  className="formBox loginForm"
                  onSubmit={handleLogin}
                >
                  <label className="inputContainer">
                    <input
                      autoComplete="off"
                      required
                      name="email"
                      placeholder="Email Address"
                      type="email"
                      value={email}
                      onChange={handleChange}
                    />
                  </label>

                  <label className="inputContainer">
                    <input
                      autoComplete="off"
                      required
                      name="pw"
                      type="password"
                      placeholder="Password"
                      value={pw}
                      onChange={handleChange}
                    />
                  </label>

                  <input
                    className="btn-large login"
                    type="submit"
                    value="Login"
                  />
                </form>
                <Button
                  class="btn-large toSignUp"
                  click={changeForm}
                >
                  New to Ecomm? Create Account
                </Button>
              </div>
            </div>
          );
        }}
      </UserContextConsumer>
    );
  }
}

export default Login;
