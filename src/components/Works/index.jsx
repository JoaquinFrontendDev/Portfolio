import React from 'react'
import Project from '../Product/Project'
import { products } from '../../data'
import './Works.css'

const Works = () => {
	return (
		<div className='works-container'>
			<div className='works-top'>
				<div className='works-title'></div>
				<div className='subtitle-wrapper'>
					<div className='subtitle-static'></div>
					<ul className='subtitle-dynamic'>
						<li>
							<span>Awesome experiences are waiting</span>
						</li>
						<li>
							<span>Let's put some work to your idea</span>
						</li>
						<li>
							<span>Do not be afraid to go big</span>
						</li>
						<li>
							<span>Don't pospone your growth anymore</span>
						</li>
					</ul>
				</div>
			</div>
			<div className='works-bottom'>
				<div className='work-cards'>
					{products.map((item) => (
						<Project key={item.id} img={item.img} link={item.link} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Works
