import React from 'react';
import './Modal.css';
import Login from './Login';
import SignUp from './SignUp';
class Modal extends React.Component{
    render() {
        console.log(this.props.view);
        return(
            <div className="modalWrapper"
                style={{
                    opacity: this.props.view?1:0,
                    display: this.props.view?"block":"none"
                }}
            >
                {this.props.isLoggingIn ? <Login 
                                            email={this.props.email} 
                                            pw={this.props.pw} 
                                            handleChange={this.props.handleChange}
                                            changeForm={this.props.changeForm} 
                                            handleSubmit={this.props.handleLogin} /> 
                                            : 
                                            <SignUp 
                                            userName={this.props.userName}
                                            email={this.props.email} 
                                            pw={this.props.pw}
                                            confirmPw={this.props.confirmPw}
                                            handleChange={this.props.handleChange}
                                            handleSubmit={this.props.handleSignUp}
                                            changeForm={this.props.changeForm} 
                                            errorMessages={this.props.errorMessages}/> }
            </div>
        )
    }
}

export default Modal;