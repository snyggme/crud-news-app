import React from 'react';
import Article from './Article';
import ArticleWithHover from './ArticleWithHover';

const SearchedArticles = (props) => {
	const { feeds } = props.search;

	if (feeds.length === 0) 
		return <div className='no-results'>Nothing found :(</div>
		
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

export default SearchedArticles;