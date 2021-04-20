import React from 'react';
import './App.css';
class Login extends React.Component {
    render() {
        return(
            <div className="formContainer">
                <div className="leftPane">
                    <div>Login
                        <div className="leftPaneDesc">
                            Login to get access to the products 
                        </div>
                    </div>
                    <div>
                        <img src="/modalLeftPane.png" alt="Login / SignUp" />
                    </div>
                </div>
                <div className="rightPane">
                    <form className="formBox loginForm" onSubmit={this.props.handleSubmit}>
                        <label className="inputContainer">
                            <input autoComplete="off" required name="email" placeholder="Email Address" type="email" value={this.props.email} onChange={this.props.handleChange} /> 
                        </label>
                        
                        <label className="inputContainer">
                            <input autoComplete="off" required name="pw" type="password" placeholder="Password" value={this.props.pw} onChange={this.props.handleChange} /> 
                        </label>

                        <input className="btn-large login" type="submit" value="Login" />
                    </form>
                    <button className="btn-large toSignUp" onClick={this.props.changeForm}>New to Ecomm? Create Account </button>
                </div>
            </div>
        )
    }
}

export default Login;