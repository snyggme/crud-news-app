import React from 'react';
import { connect } from 'react-redux';
import Main from '../components/Main';
import { getFeeds } from '../actions/FeedsAction';

const MainContainer = (props) => 
    <Main {...props} />

const mapStateToProps = store => {
    return {
        news: store.news 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getFeeds: () => dispatch(getFeeds())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainContainer);