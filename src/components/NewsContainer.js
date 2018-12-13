import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import News from './News';
import SingleFeed from './SingleFeed';
import UpdateArticle from './UpdateArticle';
import CreateArticle from './CreateArticle';
import SearchedArticles from './SearchedArticles';
import NoMatch from './NoMatch';
import ErrorMessage from './ErrorMessage';
import PrivateRoute from './PrivateRoute';

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

export default NewsContainer;