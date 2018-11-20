import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Navbar from './components/Navbar';
import News from './components/News';

class App extends Component {
  render() {
    return (
      <div>
        	<Navbar />
            <Switch>
                <Route exact path='/' component={News} />             
                <Route path='/news' component={News} />
            </Switch>
      </div>
    );
  }
}

export default withRouter(App);


// <PrivateRoute path='/profile' component={Profile} />