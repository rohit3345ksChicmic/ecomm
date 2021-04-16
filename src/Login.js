import React from 'react';
import './App.css';
class Login extends React.Component {
    render() {
        return(
            <div className="formContainer">
                <div className="leftPane">
                    Login
                </div>
                <form className="formBox loginForm" onSubmit={this.props.handleSubmit}>
                    <label className="inputContainer">
                    <span className="label"> Email:  </span>
                        <input autoComplete="off" required name="email" placeholder="Email Address" type="email" value={this.props.email} onChange={this.props.handleChange} /> 
                    </label>
                    
                    <label className="inputContainer">
                    <span className="label"> Password:  </span>
                        <input autoComplete="off" required name="pw" type="password" placeholder="Password" value={this.props.pw} onChange={this.props.handleChange} /> 
                    </label>

                    <input className="btn login" type="submit" value="Log In" />
                    <button onClick={this.props.changeForm}>New to Ecomm? Create an Account </button>
                </form>
                
            </div>
        )
    }
}

export default Login;