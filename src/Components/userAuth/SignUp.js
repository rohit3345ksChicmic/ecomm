import React from "react";
import "../App/App.css";
import Button from '../Button/Button';
import { UserContextConsumer } from "../../Contexts/UserContext";
class SignUp extends React.Component {
  render() {
    return (
      <UserContextConsumer>
        {({userName,email,pw,confirmPw,handleChange,handleSignUp,changeForm,errorMessages }) => {
          return (<div className="formContainer">
            <div className="leftPane">
              <div>
                Sign Up
                <div className="leftPaneDesc">
                  Sign Up with your details to get started.
                </div>
              </div>
              <div>
                <img src="/modalLeftPane.png" alt="Login / SignUp" />
              </div>
            </div>
            <div className="rightPane">
              <form
                className="formBox signUpForm"
                onSubmit={handleSignUp}
              >
                <label className="inputContainer">
                  <input
                    autoComplete="off"
                    placeholder="User Name*"
                    name="userName"
                    type="text"
                    value={userName}
                    onChange={handleChange}
                  />
                  <span className="error">
                    {errorMessages["userName"]}
                  </span>
                </label>

                <label className="inputContainer">
                  <input
                    autoComplete="off"
                    placeholder="Email Address*"
                    name="email"
                    type="email"
                    value={email}
                    onChange={handleChange}
                  />
                  <span className="error">
                    {errorMessages["email"]}
                  </span>
                </label>

                <label className="inputContainer">
                  <input
                    autoComplete="off"
                    placeholder="Password*"
                    name="pw"
                    type="password"
                    value={pw}
                    onChange={handleChange}
                  />
                  <span className="error">
                    {errorMessages["pw"]}
                  </span>
                </label>

                <label className="inputContainer" id="confirmPw">
                  <input
                    autoComplete="off"
                    placeholder="Re-Enter Password"
                    name="confirmPw"
                    type="password"
                    value={confirmPw}
                    onChange={handleChange}
                  />
                  <span className="error">
                    {errorMessages["confirmPw"]}
                  </span>
                </label>

                <input
                  className="btn-large signUp"
                  type="submit"
                  value="Sign Up"
                />
                <Button
                  class="btn-large toLogin"
                  click={changeForm}
                >
                  
                  Existing User? Login
                </Button>
              </form>
              
            </div>
          </div>);
        }}
      </UserContextConsumer>
    );
  }
}

export default SignUp;
