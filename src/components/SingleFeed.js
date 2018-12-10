import React from 'react';
import auth from '../utils/auth';
import EditorTools from './EditorTools';
import { Link } from 'react-router-dom';

const SingleFeed = (props) => {
	const { feeds } = props.news;
	const { newsId } = props.match.params;

	const feed = feeds.find(feed => feed._id === newsId)

	const { title, content, createDate, creator: { _id, displayName } } = feed;

	const userId = auth.getUserId();

	const date = new Date(createDate);

	return (
		<article className='single-feed-container'>
			{ userId === _id &&
				<EditorTools id={newsId} />
			}
			<h2>{title}</h2>
			<div>
				<span className='author-name'>{displayName}</span>
				<span>
					{`${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`}  &#183; {'5 min read'}
				</span>
			</div>
			<p>{content}</p>
			{ userId === _id &&
				(
					<div>
						<Link to={`/news/${newsId}/edit`}>
							<button className='btn'>Edit</button>
						</Link>
						<button className='btn'>Delete</button>
					</div>
				)
			}
			
		</article>
	)
}

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default SingleFeed;