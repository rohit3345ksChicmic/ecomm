import React from "react";
import "./Modal.css";
import Login from "./Login";
import SignUp from "./SignUp";
import { UserContextConsumer } from "../../Contexts/UserContext";

const Modal = ({ changeForm, viewModal, isLoggingIn, changeModalView }) => {
  return (
    <div
      className="modalWrapper"
      style={{
        opacity: viewModal ? 1 : 0,
        display: viewModal ? "block" : "none",
      }}
    >
      {isLoggingIn ? (
        <Login changeModalView={changeModalView} changeForm={changeForm} />
      ) : (
        <SignUp changeModalView={changeModalView} isLoggingIn={isLoggingIn} changeForm={changeForm} />
      )}
    </div>
  );
}

export default Modal;
