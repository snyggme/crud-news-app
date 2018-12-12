import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import News from './News';
import SingleFeed from './SingleFeed';
import UpdateArticle from './UpdateArticle';
import CreateArticle from './CreateArticle';
import SearchedArticles from './SearchedArticles';

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
				<Route path='/news/:newsId/edit' render={ renderProps =>
                    <UpdateArticle {...this.props} {...renderProps }/>
                } /> 
                <Route path='/news/search' render={ renderProps =>
                    <SearchedArticles {...this.props} {...renderProps }/>
                } />
                <Route path='/news/create' render={ renderProps =>
                    <CreateArticle {...this.props} {...renderProps }/>
                } />       
                <Route path='/news/:newsId' render={ renderProps =>
                    <SingleFeed {...this.props} {...renderProps }/>
                } />          
                <Route path='/news' render={ renderProps =>
                	<News {...this.props} {...renderProps }/>
               	}/>
            </Switch>
		)	
	}
}

export default NewsContainer;