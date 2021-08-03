import React, { useState, useEffect } from "react";
import "../App/App.css";
import Button from '../Button/Button';
import { useSelector, useDispatch } from "react-redux";
import { signUp } from "../../Redux/Actions";

const SignUp = ({ changeForm, isLoggingIn }) => {
  const dispatch = useDispatch();
  var errorString = {
    userName: "Invalid Username",
    email: "Invalid Email Address",
    password: "Weak Password",
    confirmPassword: "Passwords Mismatch",
  };
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [currentField, setCurrentField] = useState("");
  const [errorMessages, setErrorMessages] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const users = useSelector(state => state.auth.users);

  const generateUserID = (length = 32) => {
    let charactersArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let userID = "";
    for (let i = 0; i < length; i++) {
      userID += charactersArr[Math.floor(Math.random() * charactersArr.length)];
    }
    return userID;
  }

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("Signing Up");
    console.log(errorMessages, "errorMessages");
    console.log("Error Messages Status: ",);
    if (
      Object.values(errorMessages).every(error => error === "") &&
      userName !== "" &&
      email !== "" &&
      password !== "" &&
      confirmPassword !== ""
    ) {
      if (users.find(user => user.email === email)) {
        alert("This email is already registered");
        changeForm();
      }
      else {
        
        let newUser = {
          userId: generateUserID(),
          userName,
          email,
          password
        }
        dispatch(signUp(newUser));
        setEmail("");
        setUserName("");
        setPassword("");
        setConfirmPassword("");
        setCurrentField("");
        alert("Sign up is successful. Please Log in.");
        changeForm();
      }
    }
    else {
      alert("Please fill valid details to Sign up");
    }
  }


  const validateIndividialInputs = (tempErrorMessages, Regex, value) => {
    if (!Regex.test(value)) {
      console.log("password regex failed");
      setErrorMessages(tempErrorMessages);
    } else {
      tempErrorMessages[currentField] = "";
      setErrorMessages(tempErrorMessages);
    }
  }

  const validateForm = () => {
    if (!isLoggingIn) {
      let tempErrorMessages = JSON.parse(JSON.stringify(errorMessages));

      switch (currentField) {

        case "userName":
          var userNameRegex = /^[A-Za-z0-9]{3,20}$/g;
          if (userName.length === 0) {
            tempErrorMessages[currentField] = "Username cannot be empty";
          }
          else if (userName.includes(" ")) {
            tempErrorMessages[currentField] = "Space is not allowed";
          }
          else {
            tempErrorMessages[currentField] = "Between 3 to 20 characters";
          }
          validateIndividialInputs(tempErrorMessages, userNameRegex, userName);
          break;



        case "email":
          var emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if (email.length === 0) {
            tempErrorMessages[currentField] = "Email Field Cannot be empty";
          }
          else if (!email.includes("@")) {
            tempErrorMessages[currentField] = "Please include '@' in the email";
          }
          else if (!email.includes(".")) {
            tempErrorMessages[currentField] = "Please include '.' in the email";
          }
          else if (email.includes("..")) {
            tempErrorMessages[currentField] = "Consecutive dots are not allowed";
          }
          else if (
            email.startsWith("@") ||
            email.startsWith(".") ||
            email.endsWith("@") ||
            email.endsWith(".")
          ) {
            tempErrorMessages[currentField] = "'@' or '.' not allowed at beginning or end";
          }
          else if (email.split(".")[email.split(".").length - 1].length < 2) {
            tempErrorMessages[currentField] = "Please enter a valid domain";
          }
          else if (
            [...(email.match(/@/g) || [])].length > 1
          ) {
            tempErrorMessages[currentField] = "Only one '@' allowed";
          }
          else {
            tempErrorMessages[currentField] = "Invalid Email Address";
          }
          validateIndividialInputs(tempErrorMessages, emailRegex, email);
          break;



        case "password":
          var pwRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/g;
          if (password.length === 0) {
            tempErrorMessages[currentField] = "Password cannot be empty";
          }
          else if (!/(?=.*\d)/g.test(password)) {
            tempErrorMessages[currentField] = "Please include atleast one digit";
          }
          else if (!/(?=.*[a-z])/g.test(password)) {
            tempErrorMessages[currentField] = "Please include atleast one lowercase letter";
          }
          else if (!/(?=.*[A-Z])/g.test(password)) {
            tempErrorMessages[currentField] = "Please include atleast one uppercase letter";
          }
          else if (!/(?=.*[!@#$%^&*])/g.test(password)) {
            tempErrorMessages[currentField] = "Pleae include atleast one special Character/Symbol";
          }
          else if (password.length < 8) {
            tempErrorMessages[currentField] = "Minimum length 8 characters";
          }
          else {
            tempErrorMessages[currentField] = "Please use a stronger password";
          }
          validateIndividialInputs(tempErrorMessages, pwRegex, password);
          break;



        case "confirmPassword":
          if (password !== confirmPassword) {
            tempErrorMessages[currentField] = errorString[currentField];
            setErrorMessages(tempErrorMessages);
          }
          else {
            tempErrorMessages[currentField] = "";
            setErrorMessages(tempErrorMessages);
          }
          break;

        default:
          break;
      }
    }
  }

  useEffect(() => {
    validateForm();
  }, [userName, email, password, confirmPassword]);

  return (
    <div className="formContainer">
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
              onChange={(e) => {
                setUserName(e.target.value);
                setCurrentField(e.target.name);
              }}
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
              onChange={(e) => {
                setEmail(e.target.value);
                setCurrentField(e.target.name);
              }}
            />
            <span className="error">
              {errorMessages["email"]}
            </span>
          </label>

          <label className="inputContainer">
            <input
              autoComplete="off"
              placeholder="Password*"
              name="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setCurrentField(e.target.name);
              }}
            />
            <span className="error">
              {errorMessages["password"]}
            </span>
          </label>

          <label className="inputContainer" id="confirmPw">
            <input
              autoComplete="off"
              placeholder="Re-Enter Password"
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setCurrentField(e.target.name);
              }}
            />
            <span className="error">
              {errorMessages["confirmPassword"]}
            </span>
          </label>

          <input
            className="btn-large signUp"
            type="submit"
            value="Sign Up"
          />
          <Button
            className="btn-large toLogin"
            click={changeForm}
          >
            Existing User? Login
          </Button>
        </form>

      </div>
    </div>
  );
}

export default SignUp;
