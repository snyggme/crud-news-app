import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditorTools extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {

	}
	render() {
		const newsId = this.props.id;
		
		return (
			<div className='editor-tools'>
				<Link to={`/news/${newsId}/edit`}>
					<i className="fa fa-pencil" aria-hidden="true" />
				</Link>
				<i 
					onClick={this.handleClick}
					className="fa fa-trash-o" 
					aria-hidden="true" 
				/>
			</div>
		)
	}
}

export default EditorTools;