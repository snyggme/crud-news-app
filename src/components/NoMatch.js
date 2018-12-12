import React from 'react';

const NoMatch = () => {
	return (
		<div className='no-match'>No match for <code>{window.location.pathname}</code></div>
	)
}

export default NoMatch;