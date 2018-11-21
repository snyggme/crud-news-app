import React from 'react';
import intro from '../assets/intro.svg'

const MainContent = () => {
	return (
		<div className='main-content'>
			<div className='intro'>
				<p>Welcome to SANews</p>
				<p>where news matter</p>
				<p className='small'>We’ll deliver the best news straight to you </p>
				<p className='small'>we care about most latest and interesting news.</p>
				<button>See all</button>
			</div>
			<div>
				<img src={intro} alt='intro' />
			</div>
		</div>
	)
}

export default MainContent;