import React from 'react';
import MainContent from './MainContent'
import PopularArticles from './PopularArticles'
import EditorsArticles from './EditorsArticles'

const Main = () => {
	return (
		<main className='main-wrapper'>
			<MainContent />
			<PopularArticles />
			<EditorsArticles />
		</main>
	)
}

export default Main;