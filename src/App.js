import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Navbar from './components/Navbar';
import News from './components/News';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
    // componentDidMount() {
    //     const _onInit = auth2 => {
    //         console.log('init OK', auth2)
    //     }
    //     const _onError = err => {
    //         console.log('error', err)
    //     }
    //     window.gapi.load('auth2', function() {
    //         window.gapi.auth2
    //             .init({ 
    //                 client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    //             })
    //             .then(_onInit, _onError)
    //     })
    // }

    render() {
        return (
          <div>
          <button onClick={this.signIn}>Log in</button>
          <button onClick={this.signOut}>Log out</button>
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