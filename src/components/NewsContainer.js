import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import News from './News';
import SingleFeed from './SingleFeed';

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