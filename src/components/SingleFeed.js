import React from 'react';

const SingleFeed = (props) => {
	const { feeds, isLoading } = props.news;
	const { newsId } = props.match.params;

	const feed = feeds.find(feed => feed._id === newsId)

	const { title, content } = feed;

	return (
		<div>
			<h2>{title}</h2>
			<p>{content}</p>
		</div>
	)
}

export default SingleFeed;