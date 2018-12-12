import React, { Component} from 'react';
import EditArticleProto from './EditArticleProto';
import NoMatch from './NoMatch';
import { isNewsIdValid } from '../utils/other';

class UpdateArticle extends Component {
	constructor(props) {
		super(props);

		this.handleSave = this.handleSave.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
	}
	async handleSave({ title, content }) {
		if (title === '' || content === '')
			return

		const { newsId } = this.props.match.params;

		await this.props.updateFeed({ title, content }, newsId);

		this.props.history.push(`/news/${newsId}`);
	}
	handleCancel() {
		this.props.history.push('/news');
	}
	render() {
		const { feeds } = this.props.news;
		const { newsId } = this.props.match.params;

		if(!isNewsIdValid(newsId, feeds))
			return <NoMatch />

		const feed = feeds.find(feed => feed._id === newsId)

		const { title, content } = feed;

		return (
			<EditArticleProto 
				title={title} 
				content={content} 
				btnText='Save'
				handleEdit={this.handleSave}
				handleCancel={this.handleCancel}
			/>
		)
	}
}

export default UpdateArticle;