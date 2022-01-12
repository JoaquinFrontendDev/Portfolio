import React, { useEffect, useState } from 'react'
import ImageSlider from '../ImageSlider'
import { products } from '../../data'
import './Works.css'
import { ThemeContext } from '../../context'
import { useContext } from 'react'

const Works = () => {
	const theme = useContext(ThemeContext)
	const darkMode = theme.state.darkMode
	const [width, setWidth] = useState(window.innerWidth)
	useEffect(() => {
		function handleResize() {
			setWidth(window.innerWidth)
		}
		window.addEventListener('resize', handleResize)
	}, [])
	return (
		<div className='works-container' id='work'>
			<div className='works-top'>
				<div
					className={
						darkMode ? 'works-title dark-mode-title' : 'works-title'
					}></div>
				<div className='subtitle-wrapper'>
					<div className='subtitle-static'></div>
					<ul className='subtitle-dynamic'>
						<li className={darkMode ? 'dark-mode-li' : ''}>
							<span style={{ color: darkMode && 'var(--bg-color)' }}>
								Awesome experiences are waiting 🏃
							</span>
						</li>
						<li className={darkMode ? 'dark-mode-li' : ''}>
							<span style={{ color: darkMode && 'var(--bg-color)' }}>
								Let's put some work to your idea 💡
							</span>
						</li>
						<li className={darkMode ? 'dark-mode-li' : ''}>
							<span style={{ color: darkMode && 'var(--bg-color)' }}>
								Do not be afraid to go big 💪
							</span>
						</li>
						<li className={darkMode ? 'dark-mode-li' : ''}>
							<span style={{ color: darkMode && 'var(--bg-color)' }}>
								Sky rocket your company today 🚀
							</span>
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
							<img
								src={product.img}
								alt='portfolio'
								key={product.id}
								className='works-img'
							/>
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
