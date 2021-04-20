import React from 'react';
import './App.css';

class SignUp extends React.Component {
    render() {
        return(
            <div className="formContainer">
                <div className="leftPane">
                <div>Sign Up
                    <div className="leftPaneDesc">
                        Sign Up with your details to get started.
                    </div>
                </div>
                    <div>
                        <img src="/modalLeftPane.png" alt="Login / SignUp" />
                    </div>
                </div>
                <div className="rightPane">
                    <form className="formBox signUpForm" onSubmit={this.props.handleSubmit}>
                    
                    
                    <label className="inputContainer">
                        <input autoComplete="off" placeholder="User Name*" name="userName" type="text" value={this.props.userName} onChange={this.props.handleChange} /> 
                        <span className="error">{this.props.errorMessages['userName']}</span>
                    </label>
                    
                    
                    
                    <label className="inputContainer">
                        <input autoComplete="off" placeholder="Email Address*" name="email" type="email" value={this.props.email} onChange={this.props.handleChange} />                     
                        <span className="error">{this.props.errorMessages['email']}</span>
                    </label>

                    
                    


                    
                    <label className="inputContainer">
                        <input autoComplete="off" placeholder="Password*" name="pw" type="password" value={this.props.pw} onChange={this.props.handleChange} />
                        <span className="error">{this.props.errorMessages['pw']}</span>
                    </label>

                    
                    
                    
                    
                    <label className="inputContainer" id="confirmPw">
                        <input autoComplete="off" placeholder="Re-Enter Password" name="confirmPw" type="password" value={this.props.confirmPw} onChange={this.props.handleChange} />    
                        <span className="error">{this.props.errorMessages['confirmPw']}</span>
                    </label>
                    

                    <input className="btn-large signUp" type="submit" value="Sign Up" />
                    <button className="btn-large toLogin" onClick={this.props.changeForm}> Existing User? Login </button>
                </form>
                </div>
            </div>
        )
    }
}

export default SignUp;