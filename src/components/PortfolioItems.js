import React from 'react';

//Shares CSS with 'Portfolio'
function GenerateTagList({ tags }) {
	const tagList = tags.map((tag) => <li>{tag}</li>);
	console.log(tagList);
	return <ul className='port-item-tagList'>{tagList}</ul>;
}

const PortfolioItem = ({
	title,
	url,
	git,
	createDate,
	picture,
	alt,
	tags,
	desc,
}) => {
	return (
		<div className='port-item'>
			<div className='port-top'>
				<div className='port-item-title'>
					<h3>{title}</h3>
					<h5>Created: {createDate}</h5>
				</div>
				<div className='port-item-tags'>
					<GenerateTagList tags={tags} />
				</div>
			</div>
			<div className='port-bottom'>
				<div className='port-left'>
					<div className='port-item-img'>
						<div className='port-item-img-overlay'>
							<a href={url} target='#'>
								<i className='fas fa-external-link-alt'></i>
							</a>
							<a href={git} target='#'>
								<i className='fab fa-github-square'></i>
							</a>
						</div>

						<img className='thumbnail' src={picture} alt={alt} />
					</div>
				</div>
				<div className='port-right'>
					<div className='port-desc'>
						<div className='port-item-hrefs'>
							{url ? (
								<a href={url} target='#'>
									Live View
								</a>
							) : (
								''
							)}
							{git ? (
								<a href={git} target='#'>
									Github
								</a>
							) : (
								''
							)}
						</div>
						<div className='port-item-desc'>
							<p>{desc}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PortfolioItem;
