import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Navbar from './components/Navbar';
import NewsContainer from './components/NewsContainer';
import Main from './components/Main';
import Footer from './components/Footer';

import { getFeeds, createFeed, updateFeed, deleteFeed } from './actions/FeedsAction';
import { googleLogin, googleLogout } from './actions/AuthAction';
import auth from './utils/auth';

class App extends Component {
    constructor(props) {
        super(props);

        this.handleAddFeed = this.handleAddFeed.bind(this);
    }
    handleAddFeed() {
        this.props.createFeed({title: 'fresh title', content: 'fresh content'})
    }
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
                    <Route path='/news' render={ renderProps =>
                        <NewsContainer {...this.props} {...renderProps }/>
                    }/>
                </Switch>
                <button onClick={this.handleAddFeed}>ADD FEED</button>
                <Footer />
            </div>
        );
  }
}

const mapStateToProps = store => {
    return {
        news: store.news,
        auth: store.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getFeeds: () => dispatch(getFeeds()),
        googleLogin: () => dispatch(googleLogin()),
        googleLogout: () => dispatch(googleLogout()),
        createFeed: (feed) => dispatch(createFeed(feed)),
        updateFeed: (feed, id) => dispatch(updateFeed(feed, id)),
        deleteFeed: (id) => dispatch(deleteFeed(id))
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(App));