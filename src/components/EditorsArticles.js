import React from 'react';
import Article from './Article';
// import { Link } from 'react-router-dom';

const EditorsArticles = (props) => {
	return (
		<section className='editors-articles'>
				<header className='title'>
					<p>Editor's Choice</p>
				</header>
				{ 
					props.feeds.map(feed => 
						<Article 
							feed={feed}
							key={feed._id} 
							full={false}
						/>
					) 
				}
		</section>
	)
}

export default EditorsArticles;