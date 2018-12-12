import React, { Component } from 'react';

class NewsSearch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchBasis: '30px',
			inputWidth: '0px'
		}

		this.input = React.createRef();

		this.handleFocus = this.handleFocus.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
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
	handleSubmit(e) {
		e.preventDefault();

		const { value } = this.input.current;

		const feeds = this.props.feeds.filter(({ title }) => 
			this.checkEquality(title, value)
		)
		
		this.props.setSearchedFeeds(feeds);
		this.props.history.push('/news/search');

		e.target.reset();

		this.setState({
			searchBasis: '30px',
			inputWidth: '0px'
		})
	}
	checkEquality(str, search) {
		var arr = search.split(' ');
		
		for(let i = 0; i < arr.length; i++) {
			if (str.match(arr[i]) !== null)
				return true
		}

		return false
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
					<form onSubmit={this.handleSubmit}>
						<input 
							ref={this.input}
							onFocus={this.handleFocus} 
							onBlur={this.handleBlur}
							style={{
								width: inputWidth
							}}
							type='search' 
							placeholder='Search News'
							required={true}
						/>
					</form>
				</label>
			</li>
		)
	}
}

export default NewsSearch;