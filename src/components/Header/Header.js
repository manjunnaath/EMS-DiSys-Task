/**
 * Employee Management System -Header
 ************************************
 *
 * @version 1.0.1
 * @author Manjunath V
 * @description Employee Management System - Header
 * @createdDate [21/01/2020]
 * ***************************************
 * @createdDate Manjunath V
 * @lastModifiedDate [21/01/2020]
 * @lastModifiedReason
 */


import React from 'react';

class Header extends React.Component{
    render(){
        return(
            <header className="App-header">
                <img src={this.props.logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome To Employee Management System</h1>
            </header>
        )
    }
}
export default Header;