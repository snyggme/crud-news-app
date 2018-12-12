import React from 'react';

const ErrorMessage = ({ news: { error } }) => {
	return (
		<div className='error'>{error}</div>
	)
}

export default ErrorMessage;