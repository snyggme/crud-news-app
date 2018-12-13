import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Navbar from './components/Navbar';
import NewsContainer from './components/NewsContainer';
import Main from './components/Main';
import Footer from './components/Footer';
import NoMatch from './components/NoMatch';
import LoginForm from './components/LoginForm';

import { getFeeds, createFeed, updateFeed, deleteFeed } from './actions/FeedsAction';
import { googleLogin, googleLogout } from './actions/AuthAction';
import { setSearchedFeeds } from './actions/SearchAction';
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
                    }/>             
                    <Route path='/signup' render={ renderProps =>
                        <LoginForm {...this.props} {...renderProps }/>
                    } />
                    <Route path='/news' render={ renderProps =>
                        <NewsContainer {...this.props} {...renderProps }/>
                    }/>
                    <Route component={NoMatch} />
                </Switch>
                <Footer />
            </div>
        );
  }
}

const mapStateToProps = store => {
    return {
        news: store.news,
        auth: store.auth,
        search: store.search
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getFeeds: () => dispatch(getFeeds()),
        googleLogin: () => dispatch(googleLogin()),
        googleLogout: () => dispatch(googleLogout()),
        createFeed: (feed) => dispatch(createFeed(feed)),
        updateFeed: (feed, id) => dispatch(updateFeed(feed, id)),
        deleteFeed: (id) => dispatch(deleteFeed(id)),
        setSearchedFeeds: (feeds) => dispatch(setSearchedFeeds(feeds))
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(App));