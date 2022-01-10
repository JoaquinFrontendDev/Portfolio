import React, { useState } from 'react'
import { products } from '../../data'
import './ImageSlider.css'

const ImageSlider = () => {
	const [current, setCurrent] = useState(0)
	const length = products.length
	if (!Array.isArray(products) || length === 0) return null
	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1)
	}
	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1)
	}

	return (
		<div className='slider-container'>
			<i
				className='fas fa-arrow-alt-circle-left left-arrow'
				onClick={prevSlide}></i>
			<i
				className='fas fa-arrow-alt-circle-right right-arrow'
				onClick={nextSlide}></i>
			{products.map((product, index) => {
				return (
					<div
						className={index === current ? 'slide-active' : 'slide'}
						key={index}>
						{index === current && (
							<>
								<img src={product.img} alt='cars' className='slider-img' />
								<div className='slider-modal'>
									<div className='slider-modal-text'>
										<h3>{product.title}</h3>
										<p>{product.description}</p>
									</div>
									<div className='slider-icons'>
										<a
											href={product.github}
											className='slider-github-logo'
											target='_blank'
											rel='noreferrer'>
											<i className='fab fa-github'></i>
										</a>
										<a
											href={product.link}
											className='slider-web-logo'
											target='_blank'
											rel='noreferrer'>
											<i className='fab fa-chrome'></i>
										</a>
									</div>
								</div>
							</>
						)}
					</div>
				)
			})}
		</div>
	)
}

export default ImageSlider
