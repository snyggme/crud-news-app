import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Navbar from './components/Navbar';
import News from './components/News';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        	<Navbar />
            <Switch>
                <Route exact path='/' component={Main} />             
                <Route path='/news' component={News} />
            </Switch>
            <Footer />
      </div>
    );
  }
}

export default withRouter(App);


// <PrivateRoute path='/profile' component={Profile} />