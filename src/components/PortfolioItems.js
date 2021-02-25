import React from 'react';
import PortfolioTag from './PortfolioTags';

//Shares CSS with 'Portfolio'
function GenerateTagList({ tags }) {
	const tagList = tags.map((tag) => <li>{tag}</li>);
	console.log(tagList);
	return <ul className='port-item-tagList'>{tagList}</ul>;
}

const PortfolioItem = ({ title, url, git, picture, alt, tags, desc }) => {
	return (
		<div className='port-item'>
			<div className='port-item-title'>
				<h1>{title}</h1>
			</div>
			<div className='port-item-tags'>
				<GenerateTagList tags={tags} />
			</div>
			<img src={picture} alt={alt} />
			<div className='port-item-desc'>
				<p>{desc}</p>
			</div>
			<div className='port-item-hrefs'>
				<a href={url} target='#'>
					Live View
				</a>
				<a href={git} target='#'>
					Github
				</a>
			</div>
		</div>
	);
};

export default PortfolioItem;
