import React, { useEffect, useState } from 'react'
import ImageSlider from '../ImageSlider'
import { products } from '../../data'
import './Works.css'

const Works = () => {
	const [width, setWidth] = useState(0)
	useEffect(() => {
		function handleResize() {
			setWidth(window.innerWidth)
		}
		window.addEventListener('resize', handleResize)
	}, [])
	return (
		<div className='works-container' id='work'>
			<div className='works-top'>
				<div className='works-title'></div>
				<div className='subtitle-wrapper'>
					<div className='subtitle-static'></div>
					<ul className='subtitle-dynamic'>
						<li>
							<span>Awesome experiences are waiting 🏃</span>
						</li>
						<li>
							<span>Let's put some work to your idea 💡</span>
						</li>
						<li>
							<span>Do not be afraid to go big 💪</span>
						</li>
						<li>
							<span>Sky rocket your company today 🚀</span>
						</li>
					</ul>
				</div>
			</div>
			<div className='works-bottom'>
				{width > 1500 ? (
					<ImageSlider />
				) : (
					products.map((product) => (
						<div className='works-flex'>
							<img src={product.img} alt='cars' className='works-img' />
							<div className='works-modal'>
								<div className='works-modal-text'>
									<h3>{product.title}</h3>
									<p>{product.description}</p>
								</div>
								<div className='works-icons'>
									<a
										href={product.github}
										className='works-github-logo'
										target='_blank'
										rel='noreferrer'>
										<i className='fab fa-github'></i>
									</a>
									<a
										href={product.link}
										className='works-web-logo'
										target='_blank'
										rel='noreferrer'>
										<i className='fab fa-chrome'></i>
									</a>
								</div>
							</div>
						</div>
					))
				)}
			</div>
		</div>
	)
}

export default Works
