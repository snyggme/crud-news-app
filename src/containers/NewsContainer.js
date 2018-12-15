import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import News from '../components/News';
import SingleFeed from '../components/SingleFeed';
import UpdateArticle from '../components/UpdateArticle';
import CreateArticle from '../components/CreateArticle';
import SearchedArticles from '../components/SearchedArticles';
import NoMatch from '../components/NoMatch';
import PrivateRoute from '../components/PrivateRoute';

import { getFeeds, createFeed, updateFeed, deleteFeed } from '../actions/FeedsAction';

class NewsContainer extends Component {
	componentDidMount() {
		this.props.getFeeds();
	}
	render() {
		const { isLoading } = this.props.news;

		if (isLoading)
			return <div className='loading'/>

		return (
			<Switch>
				<PrivateRoute path='/news/:newsId/edit' {...this.props} component={UpdateArticle} /> 
                <PrivateRoute path='/news/create' {...this.props} component={CreateArticle} />
                <Route path='/news/search' render={ renderProps =>
                    <SearchedArticles {...this.props} {...renderProps }/>
                } />
                <Route path='/news/:newsId' render={ renderProps =>
                    <SingleFeed {...this.props} {...renderProps }/>
                } />          
                <Route path='/news' render={ renderProps =>
                	<News {...this.props} {...renderProps }/>
               	}/>
                <Route component={NoMatch} />
            </Switch>
		)	
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
        createFeed: (feed) => dispatch(createFeed(feed)),
        getFeeds: () => dispatch(getFeeds()),
        updateFeed: (feed, id) => dispatch(updateFeed(feed, id)),
        deleteFeed: (id) => dispatch(deleteFeed(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewsContainer);