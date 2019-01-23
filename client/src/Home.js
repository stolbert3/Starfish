import React, { Component } from 'react';
import App from './App';
import "./LoginButton.css";



class Home extends Component {
  // calls the login method in authentication service
  login = () => {
    this.props.auth.login();
  }
  // calls the logout method in authentication service
  logout = () => {
    this.props.auth.logout();
  }
  render() {
    // calls the isAuthenticated method in authentication service
    const { isAuthenticated } = this.props.auth;
    return (
      <div>
        {
          isAuthenticated() &&
          <div className="container column">
            <h5>
              You are logged in!{' '}
              <a
                style={{ cursor: 'pointer' }}
                onClick={this.logout}
              >
                Log Out
              </a>.
            </h5>
            <App />
          </div>
        }
        {
          !isAuthenticated() && (
        
             <div className="buttonContainer">
                  <img src="./images/000659-free-Starfish-Logo-online-logo-maker-02.png" />
                  <button onClick={this.login}>Login</button> 
            </div>
            
          )
        }
      </div>
      );
    }
  }
  export default Home;