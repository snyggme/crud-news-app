import React, { Component } from 'react';

class EditArticleProto extends Component {
	constructor(props) {
		super(props);

		this.inputRef = React.createRef();
		this.textareaRef = React.createRef();

		this.handleEdit = this.handleEdit.bind(this);
	}
	handleEdit() {
		this.props.handleEdit({
			title: this.inputRef.current.value,
			content: this.textareaRef.current.value
		})
	}
	render() {
		const { btnText, title, content } = this.props;

		return (
			<section className='editor-container'>
				<article className='editor'>
					<input ref={this.inputRef} type='text' defaultValue={title} />
					<textarea ref={this.textareaRef} rows="15" cols="80" defaultValue={content} />
					<div>
						<button className='btn btn-save' onClick={this.handleEdit}>
							{btnText}
						</button>
						<button className='btn btn-cancel' onClick={this.props.handleCancel}>
							Cancel
						</button>
					</div>
				</article>
			</section>
		)	
	}
}

export default EditArticleProto;