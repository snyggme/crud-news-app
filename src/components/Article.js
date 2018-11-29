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
		this.rand1 = Math.floor(Math.random() * 20) + 3;
		this.rand2 = Math.floor(Math.random() * 100) + 1;
	}
	render() {
		const { full, feed } = this.props;
		const { content, createDate, creator: { displayName }, title } = feed;

		const date = new Date(createDate);

		return (
			<article>
				<div className='article-content'>
					<h2>{title}</h2>
					{ full &&
						<p className='description'>
							{content}
						</p>
					}
					<p className='author-name'>{displayName}</p>
					<p>
						{`${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`}  &#183; {`${this.rand1} min read`}
					</p>
				</div>
				{ full &&
					<img src={`https://picsum.photos/200/150/?image=${this.rand2}`} alt=' ' />
				}
			</article>
		)	
	}
}

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default Article;