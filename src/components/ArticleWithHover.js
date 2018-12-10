import React, { Component } from 'react';
import EditorTools from './EditorTools';
import auth from '../utils/auth';

class ArticleWithHover extends Component {
	constructor(props) {
		super(props);

		this.state = {
			hovering: false
		}

		this.handleHovering = this.handleHovering.bind(this);
		this.handleLeave = this.handleLeave.bind(this);
	}
	handleHovering() {
		const { creator: { _id } } = this.props.feed;

		if (auth.getUserId() !== _id)
			return

		this.setState({
			hovering: true
		})
	}
	handleLeave() {
		this.setState({
			hovering: false
		})
	}
	render() {
		const { Component, ...rest } = this.props;
		const { _id } = this.props.feed;
		const { hovering } = this.state;

		return (
			<div
				className='article-container' 
				onMouseOver={this.handleHovering}
				onMouseLeave={this.handleLeave}>
				<Component 
					{...rest}
				/>
				{ hovering &&
					<EditorTools id={_id} />
				}
			</div>
		)	
	}
}

export default ArticleWithHover;