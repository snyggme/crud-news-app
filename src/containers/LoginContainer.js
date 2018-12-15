import React from 'react';
import { connect } from 'react-redux';
import LoginPage from '../components/LoginPage';
import { googleLogin, signinUser } from '../actions/AuthAction';

const LoginContainer = (props) => 
    <LoginPage {...props} />

const mapStateToProps = store => {
    return {
        auth: store.auth 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        googleLogin: () => dispatch(googleLogin()),
        signinUser: (user) => dispatch(signinUser(user))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);