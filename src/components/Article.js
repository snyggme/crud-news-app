import React, { Component } from 'react';

class Article extends Component {
	constructor(props) {
		super(props);
		// day
		this.rand1 = 1;
		// month
		this.rand2 = 0;
		// mins read
		this.rand3 = 0;
	}
	componentWillMount() {
		this.rand1 = Math.floor(Math.random() * 28) + 1;
		this.rand2 = Math.floor(Math.random() * 12);
		this.rand3 = Math.floor(Math.random() * 20) + 3;
	}
	render() {
		const { full } = this.props;
		
		return (
			<article>
				<div className='article-content'>
					<h2>Article Name</h2>
					{ full &&
						<p className='description'>
							Article short Description. How much symbols?
						</p>
					}
					<p className='author-name'>Author Name</p>
					<p>
						{`${months[this.rand2]} ${this.rand1}`}  &#183; {`${this.rand3} min read`}
					</p>
				</div>
				{ full &&
					<img src={this.props.src} alt=' ' />
				}
			</article>
		)	
	}
}

export default Article;

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];