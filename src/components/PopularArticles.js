import React from 'react';
import Article from './Article';
import { Link } from 'react-router-dom';

const articles = [
	'https://picsum.photos/200/150?image=301', 
	'https://picsum.photos/200/150?image=57',
	'https://picsum.photos/200/150?image=24',
	'https://picsum.photos/200/150?image=101'
]

const PopularArticles = () => {
	return (
		<section className='popular-articles'>
				<header className='title'>
					<p>Popular on Super Awesome News</p>
					<Link to='/news'>MORE ></Link>
				</header>
				{ 
					articles.map(src => 
						<Article src={src} key={src} full={true} />
					)
				}
		</section>
	)
}

export default PopularArticles;