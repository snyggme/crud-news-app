import React from 'react';
import Article from './Article';
// import { Link } from 'react-router-dom';

const articles = [
	'https://picsum.photos/200/150?image=301', 
	'https://picsum.photos/200/150?image=57',
	'https://picsum.photos/200/150?image=24'
]

const EditorsArticles = () => {
	return (
		<section className='editors-articles'>
				<header className='title'>
					<p>Editor's Choice</p>
				</header>
				{ 
					articles.map(src => 
						<Article src={src} key={src} full={false} />
					)
				}
		</section>
	)
}

export default EditorsArticles;