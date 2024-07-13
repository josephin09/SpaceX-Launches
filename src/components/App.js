import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './auth/Login';
import Signup from './auth/Signup';
import LaunchesList from './launches/LaunchesList';
import '../styles/App.css'; 

const App = () => {
  const isAuthenticated = !!localStorage.getItem('username'); 

  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/launches" render={() => (
          isAuthenticated ? <LaunchesList /> : <Redirect to="/login" />
        )} />
        <Redirect from="/" to="/signup" />
      </Switch>
    </div>
  );
};

export default App;




