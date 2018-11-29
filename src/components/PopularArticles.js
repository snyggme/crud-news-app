import React from 'react';
import Article from './Article';
import { Link } from 'react-router-dom';

const PopularArticles = (props) => {
	return (
		<section className='popular-articles'>
				<header className='title'>
					<p>Popular on Super Awesome News</p>
					<Link to='/news'>MORE ></Link>
				</header>
				{ 
					props.feeds.map((feed, index) => 
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

export default PopularArticles;