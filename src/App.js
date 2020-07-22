/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Auth0ProviderWithHistory from "./auth0-provider-with-history";
import { useAuth0 } from "@auth0/auth0-react";
import history from "./utils/history";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import Index from "views/Index.js";
import Landing from "views/examples/Landing.js";
import Login from "views/examples/Login.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";
import Levels from "views/examples/Levels.js";

import { UserProvider } from './UserContext'

const App = () => {
  const {isLoading, user, error} = useAuth0();
  var userInfo = user

  if (error) {
    return <div> Opps... {error.message} </div>;
  }

  if (isLoading){
    userInfo=""
  }
  else{
    userInfo=user
  }

  return(
  <UserProvider value={userInfo}>
  <BrowserRouter>
    <Switch>
      <Route
        path="/"
        exact
        render={props =>  
   <Landing {...props} />}
      />
      <Route path="/login-page" 
      exact 
      render={props => <Auth0ProviderWithHistory>
        <Login {...props} /> </Auth0ProviderWithHistory> }/>

      <Route
        path="/profile-page"
        exact
        render={props => <Auth0ProviderWithHistory>
          <Profile {...props} />
        </Auth0ProviderWithHistory>}
      />
      <Route
        path="/register-page"
        exact
        render={props => <Auth0ProviderWithHistory><Register {...props} />
        </Auth0ProviderWithHistory>}      
      />
      <Route
        path="/levels-page"
        exact
        render={props => <Auth0ProviderWithHistory><Levels {...props} />
      </Auth0ProviderWithHistory>}
      />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
  </UserProvider>
   );
};

export default App;
