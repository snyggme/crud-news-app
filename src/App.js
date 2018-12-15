import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import LoginContainer from './containers/LoginContainer';
import SignupContainer from './containers/SignupContainer';
import NewsContainer from './containers/NewsContainer';
import MainContainer from './containers/MainContainer';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NoMatch from './components/NoMatch';

import auth from './utils/auth';

class App extends Component {
    componentDidMount() {
        auth.init();
    }
    render() {
        return (
            <div>
            	<Navbar history={this.props.history} />
                <Switch>
                    <Route exact path='/' component={MainContainer} />             
                    <Route path='/login' component={LoginContainer} />
                    <Route path='/signup' component={SignupContainer} />
                    <Route path='/news' component={NewsContainer} />
                    <Route component={NoMatch} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(App);