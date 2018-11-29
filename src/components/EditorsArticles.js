import React from 'react';
import Article from './Article';
// import { Link } from 'react-router-dom';

const EditorsArticles = ({ feeds }) => {
	return (
		<section className='editors-articles'>
				<header className='title'>
					<p>Editor's Choice</p>
				</header>
				{ 
					feeds.map(feed => 
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