import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Navbar from './components/Navbar';
import News from './components/News';
import Main from './components/Main';
import Footer from './components/Footer';

import { getFeeds } from './actions/FeedsAction';
import auth from './utils/auth';
import { authWithGoogle } from './utils/network';

class App extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        const _onInit = auth2 => {
            console.log('init OK', auth2)
        }
        const _onError = err => {
            console.log('error', err)
        }
        window.gapi.load('auth2', function() {
            window.gapi.auth2
                .init({ 
                    client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
                })
                .then(_onInit, _onError)
        })
    }
    handleClick(e) {
        auth.signIn()
        authWithGoogle(auth.getToken())
    }
    render() {
        return (
          <div>
          <button onClick={this.handleClick}>Log in</button>
          <button onClick={auth.signOut}>Log out</button>
            	<Navbar />
                <Switch>
                    <Route exact path='/' render={ renderProps =>
                        <Main {...this.props} {...renderProps }/>
                    } />             
                    <Route path='/news' component={News} />
                </Switch>
                <Footer />
          </div>
        );
  }
}

const mapStateToProps = store => {
    return {
        feeds: store.feeds
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getFeeds: () => dispatch(getFeeds())
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(App));


// <PrivateRoute path='/profile' component={Profile} />