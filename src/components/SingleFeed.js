import React, { Component } from 'react';
import auth from '../utils/auth';
import EditorTools from './EditorTools';
import { Link } from 'react-router-dom';
import NoMatch from './NoMatch';
import { isNewsIdValid } from '../utils/other';

class SingleFeed extends Component {
	constructor(props) {
		super(props);

		this.handleDelete = this.handleDelete.bind(this);
	}
	handleDelete() {
		const { newsId } = this.props.match.params;

		this.props.deleteFeed(newsId);

		this.props.history.push('/news');
	}
	render() {
		const { feeds } = this.props.news;
		const { newsId } = this.props.match.params;

		if(!isNewsIdValid(newsId, feeds))
			return <NoMatch />

		const feed = feeds.find(feed => feed._id === newsId)

		const { title, content, createDate, creator: { _id, displayName } } = feed;

		const userId = auth.getUserId();

		const date = new Date(createDate);

		return (
			<article className='single-feed-container'>
				{ userId === _id &&
					<EditorTools 
						deleteFeed={this.props.deleteFeed} 
						id={newsId} 
					/>
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
						<div className='btns-container'>
							<Link to={`/news/${newsId}/edit`}>
								<button className='btn btn-edit'>Edit</button>
							</Link>
							<button className='btn btn-delete' onClick={this.handleDelete}>Delete</button>
						</div>
					)
				}
			</article>
		)	
	}
}

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default SingleFeed;