import React, { Component } from 'react';
import MainContent from './MainContent';
import PopularArticles from './PopularArticles';
import EditorsArticles from './EditorsArticles';

class Main extends Component {
	componentDidMount() {
		this.props.getFeeds();
	}
	render() {
		const { isLoading } = this.props;

		if (isLoading)
			return <div className='loading' />

		const { feeds } = this.props.news

		return (
			<main className='main-wrapper'>
				<MainContent />
				<PopularArticles feeds={feeds} />
				<EditorsArticles />
			</main>
		)	
	}
	
}

export default Main;