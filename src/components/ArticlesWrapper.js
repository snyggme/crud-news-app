import React from 'react';

const ArticlesWrapper = (props) => {
	const { Component, isLoading, feeds } = props;

	if (isLoading)
		return <div />

	return (
		<Component feeds={feeds} />
	)
}

export default ArticlesWrapper;