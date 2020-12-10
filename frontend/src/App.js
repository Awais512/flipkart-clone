import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import Layout from './components/Layout/Layout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/Home/Home';
import Signin from './containers/Signin/Signin';
import Signup from './containers/Signup/Signup';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/signin' component={Signin} exact />
          <Route path='/signup' component={Signup} exact />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
