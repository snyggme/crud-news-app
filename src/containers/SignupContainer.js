import React from 'react';
import { connect } from 'react-redux';
import SignupPage from '../components/SignupPage';
import { googleLogin, createUser, verifyCaptcha } from '../actions/AuthAction';

const SignupContainer = (props) => 
    <SignupPage {...props} />

const mapStateToProps = store => {
    return {
        auth: store.auth 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        googleLogin: () => dispatch(googleLogin()),
        verifyCaptcha: (r) => dispatch(verifyCaptcha(r)),
        createUser: (user) => dispatch(createUser(user))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignupContainer);