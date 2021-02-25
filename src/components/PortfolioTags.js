import React from 'react';

const PortfolioTag = ({ tag }) => {
	console.log('---PortTag---');
	console.log(tag);
	return <span className='port-item-tag'>{tag}</span>;
};

export default PortfolioTag;
