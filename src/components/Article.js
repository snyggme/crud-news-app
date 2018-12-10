import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Article extends Component {
	constructor(props) {
		super(props);

		this.rand1 = 1;
		this.rand2 = 0;
	}
	componentWillMount() {
		this.rand1 = Math.floor(Math.random() * 20) + 3;
		this.rand2 = Math.floor(Math.random() * 100) + 1;
	}
	render() {
		const { full, feed } = this.props;
		const { _id, createDate, creator: { displayName }, title } = feed;
		let { content } = feed;

		if (content.length > 200) {
			content = content.slice(0, 200) + ' ...';
		}

		const date = new Date(createDate);

		return (
			<article>
				<div className='article-content'>
					<h2><Link to={`/news/${_id}`}>{title}</Link></h2>
					{ full &&
						<p className='description'>
							<Link to={`/news/${_id}`}>{content}</Link>
						</p>
					}
					<p className='author-name'>{displayName}</p>
					<p>
						{`${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`}  &#183; {`${this.rand1} min read`}
					</p>
				</div>
				{ full &&
					<Link to={`/news/${_id}`}>
						<img 
							src={`https://picsum.photos/200/150/?image=${this.rand2}`}
							alt=' ' 
						/>
					</Link>
				}
			</article>
		)	
	}
}

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default Article;