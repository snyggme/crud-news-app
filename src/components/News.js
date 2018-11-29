import React, { Component } from 'react';
import Article from './Article';

class News extends Component {
	componentDidMount() {
		this.props.getFeeds();
	}
	render() {
		const { isLoading, feeds } = this.props.news;

		if (isLoading) 
			return <div className='loading' />

		return (
			<section className='all-feeds'>
				{
					feeds.map(feed => 
						<Article 
							feed={feed}
							key={feed._id} 
							full={true}
						/>
					)
				}
			</section> 
		)		
	}
}

export default News;