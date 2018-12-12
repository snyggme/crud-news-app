import React from 'react';
import Article from './Article';
import ArticleWithHover from './ArticleWithHover';

const News = (props) => {
	const { feeds } = props.news;

	return (
		<section className='all-feeds'>
			{
				feeds.map(feed => 
					<ArticleWithHover 
						Component={Article}
						feed={feed}
						deleteFeed={props.deleteFeed}
						key={feed._id} 
						full={true}
					/>
				)
			}
		</section> 
	)		
}

export default News;