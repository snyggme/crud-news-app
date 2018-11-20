import React, { Component } from 'react';

class NewsSearch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchBasis: '30px',
			inputWidth: '0px'
		}

		this.handleFocus = this.handleFocus.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
	}
	handleBlur(e) {
		if (e.target.value.length === 0) {
			this.setState({
				searchBasis: '30px',
				inputWidth: '0px'
			})
		}
	}
	handleFocus(e) {
		this.setState({
			searchBasis: '230px',
			inputWidth: '160px'
		})
	}
	render() {
		const { searchBasis, inputWidth } = this.state;
		const { className } = this.props;

		return (
			<li 
				className={className}
				style={{
					flexBasis: searchBasis
				}}>
				<label>
					<i 
						className="fa fa-search" 
						aria-hidden="true">
					</i>
					<input 
						onFocus={this.handleFocus} 
						onBlur={this.handleBlur}
						style={{
							width: inputWidth
						}}
						type='search' 
						placeholder='Search News'
						required='true'
					/>
				</label>
			</li>
		)
	}
}

export default NewsSearch;