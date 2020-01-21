/**
 * Employee Management System -Login
 ************************************
 *
 * @version 1.0.1
 * @author Manjunath V
 * @description Employee Management System - Login 
 * @createdDate [21/01/2020]
 * ***************************************
 * @createdDate Manjunath V
 * @lastModifiedDate [21/01/2020]
 * @lastModifiedReason
 */



import React from 'react';

class Login extends React.Component{
    render(){
        return(
            <div className="loginForm">
        <div className="alert alert-info">
          Username: admin@domain.com<br />
          Password: admin
                </div>
        <h1 className="loginFormHeader"><b>Login</b></h1>
        <form onSubmit={(e) => this.props.login(e)}>
          <div className="form-group">
            <label >Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required/>
          </div>
          <div className="form-group">
            <label >Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
        )
    }
}
export default Login;
