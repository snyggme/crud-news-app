import React, { Component } from 'react';
import MainContent from './MainContent';
import PopularArticles from './PopularArticles';
import EditorsArticles from './EditorsArticles';

class Main extends Component {
	componentDidMount() {
		// this.props.getFeeds();
	}
	render() {
		const { isLoading } = this.props;

		if (isLoading)
			return <div className='loading' />

		const feed = {
			title: 'fresh title',
			content: 'fresh content'
		};

		return (
			<main className='main-wrapper'>
				<MainContent />
				<button onClick={this.props.createFeed.bind(null, feed)}>create feed</button>
				<PopularArticles />
				<EditorsArticles />
			</main>
		)	
	}
	
}

export default Main;