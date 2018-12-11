import React, { Component } from 'react';
import Article from './Article';
import ArticleWithHover from './ArticleWithHover';

class News extends Component {
	render() {
		const { feeds } = this.props.news;

		return (
			<section className='all-feeds'>
				{
					feeds.map(feed => 
						<ArticleWithHover 
							Component={Article}
							feed={feed}
							deleteFeed={this.props.deleteFeed}
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