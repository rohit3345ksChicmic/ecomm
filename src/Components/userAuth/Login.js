import React, { useState } from "react";
import "../App/App.css";
import Button from '../Button/Button';
import { useSelector, useDispatch } from "react-redux";
import { logIn } from "../../reduxxx/Actions";

const Login = ({ changeForm, changeModalView }) => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.auth.users);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = (e) => {
    e.preventDefault();
    if (users.some(user => user.email === email && user.password === password)) {
      console.log("Authenticated");
      dispatch(logIn(users.find(user => user.email === email && user.password === password)));
      setEmail("");
      setPassword("");
      changeModalView();
    }
    else {
      alert("Sorry! Given email and password do not match");
    }
  }

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
          onSubmit={handleLogIn}
        >
          <label className="inputContainer">
            <input
              autoComplete="off"
              required
              name="email"
              placeholder="Email Address"
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
            />
          </label>

          <label className="inputContainer">
            <input
              autoComplete="off"
              required
              name="pw"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => { setPassword(e.target.value) }}
            />
          </label>

          <input
            className="btn-large login"
            type="submit"
            value="Login"
          />
        </form>
        <Button
          className="btn-large toSignUp"
          click={changeForm}
        >
          New to Ecomm? Create Account
        </Button>
      </div>
    </div>
  );
}

export default Login;
