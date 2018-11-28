import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Navbar from './components/Navbar';
import News from './components/News';
import Main from './components/Main';
import Footer from './components/Footer';

import { getFeeds, createFeed } from './actions/FeedsAction';
import { googleLogin, googleLogout } from './actions/AuthAction';
import auth from './utils/auth';

class App extends Component {
    componentDidMount() {
        auth.init();
    }
    render() {
        return (
            <div>
            	<Navbar {...this.props} />
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
        feeds: store.feeds,
        auth: store.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getFeeds: () => dispatch(getFeeds()),
        googleLogin: () => dispatch(googleLogin()),
        googleLogout: () => dispatch(googleLogout()),
        createFeed: (feed) => dispatch(createFeed(feed))
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(App));


// <PrivateRoute path='/profile' component={Profile} />