import React, { Component } from 'react';
import EditArticleProto from './EditArticleProto';

class CreateArticle extends Component {
	constructor(props) {
		super(props);

		this.handleAdd = this.handleAdd.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
	}
	async handleAdd({ title, content }) {
		if (title === '' || content === '')
			return

		const newsId = await this.props.createFeed({ title, content });

		if (newsId !== undefined)
			this.props.history.push(`/news/${newsId}`);
	}
	handleCancel() {
		this.props.history.push('/news');
	}
	render() {
		return (
			<EditArticleProto 
				title=''
				content='' 
				btnText='Add feed'
				handleEdit={this.handleAdd}
				handleCancel={this.handleCancel}
			/>
		)
	}
}

export default CreateArticle;