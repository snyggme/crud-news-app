import React, { Component } from 'react';

class EditArticle extends Component {
	constructor(props) {
		super(props);

		this.inputRef = React.createRef();
		this.textareaRef = React.createRef();

		this.handleSave = this.handleSave.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
	}
	async handleSave() {
		const { newsId } = this.props.match.params;
		const content = this.textareaRef.current.value;
		const title = this.inputRef.current.value;

		await this.props.updateFeed({ title, content }, newsId);

		this.props.history.push(`/news/${newsId}`);
	}
	handleCancel() {
		this.props.history.push('/news');
	}
	render() {
		const { feeds } = this.props.news;
		const { newsId } = this.props.match.params;

		const feed = feeds.find(feed => feed._id === newsId)

		const { title, content } = feed;

		return (
			<article className='editor'>
				<input ref={this.inputRef} type='text' defaultValue={title} />
				<textarea ref={this.textareaRef} rows="15" cols="80" defaultValue={content} />
				<div>
					<button className='btn' onClick={this.handleSave}>
						Save
					</button>
					<button className='btn' onClick={this.handleCancel}>
						Cancel
					</button>
				</div>
			</article>
		)
	}
}

export default EditArticle;