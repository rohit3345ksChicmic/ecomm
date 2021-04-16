import React from 'react';
import './App.css';

class SignUp extends React.Component {
    render() {
        return(
            <div className="formContainer">
                <div className="leftPane">
                    Sign Up
                </div>
                <form className="formBox signUpForm" onSubmit={this.props.handleSubmit}>
                    
                    
                    <label className="inputContainer">
                        <span className="label"> Username: </span>
                        <input autoComplete="off" placeholder="User Name*" name="userName" type="text" value={this.props.userName} onChange={this.props.handleChange} /> 
                    </label>
                    <span className="error">{this.props.errorMessages['userName']}</span>
                    
                    
                    <label className="inputContainer">
                        <span className="label">Email:  </span>
                        <input autoComplete="off" placeholder="Email Address*" name="email" type="email" value={this.props.email} onChange={this.props.handleChange} />                     
                    </label>

                    <span className="error">{this.props.errorMessages['email']}</span>
                    


                    
                    <label className="inputContainer">
                        <span className="label">Password:  </span>
                        <input autoComplete="off" placeholder="Password*" name="pw" type="password" value={this.props.pw} onChange={this.props.handleChange} />
                    </label>

                    <span className="error">{this.props.errorMessages['pw']}</span>
                    
                    
                    
                    <label className="inputContainer">
                        <span className="label">Confirm Password:  </span>
                        <input autoComplete="off" placeholder="Re-Enter Password" name="confirmPw" type="password" value={this.props.confirmPw} onChange={this.props.handleChange} />    
                    </label>
                    <span className="error">{this.props.errorMessages['confirmPw']}</span>

                    <input className="btn signUp" type="submit" value="Sign Up" />
                    <button onClick={this.props.changeForm}> Existing User? Log In </button>
                </form>
            </div>
        )
    }
}

export default SignUp;