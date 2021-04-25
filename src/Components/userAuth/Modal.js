import React from "react";
import "./Modal.css";
import Login from "./Login";
import SignUp from "./SignUp";
import { UserContextConsumer } from "../../Contexts/UserContext";
class Modal extends React.Component {
  render() {
    return (
      <UserContextConsumer>
        {({viewModal,isLoggingIn}) => {
            return(
          <div
            className="modalWrapper"
            style={{
              opacity: viewModal ? 1 : 0,
              display: viewModal ? "block" : "none",
            }}
          >
            {isLoggingIn ? (
              <Login />
            ) : (
              <SignUp />
            )}
          </div>);
        }}
      </UserContextConsumer>
    );
  }
}

export default Modal;
