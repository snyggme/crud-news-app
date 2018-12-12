import React, { Component } from 'react';
import MainContent from './MainContent';
import ArticlesWrapper from './ArticlesWrapper';
import PopularArticles from './PopularArticles';
import BestArticles from './BestArticles';

class Main extends Component {
	componentDidMount() {
		this.props.getFeeds();
	}
	render() {
		const { isLoading, feeds } = this.props.news;

		const popularFeeds = feeds.filter((feed, index) => index < 4)
		const editorsFeeds = popularFeeds.filter((feed, index) => index < 3)

		return (
			<main className='main-wrapper'>
				<MainContent />
				<ArticlesWrapper 
					Component={PopularArticles}
					isLoading={isLoading}
					feeds={popularFeeds}
				/>
				<ArticlesWrapper 
					Component={BestArticles}
					isLoading={isLoading}
					feeds={editorsFeeds}
				/>
			</main>
		)	
	}
	
}

export default Main;