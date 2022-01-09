import React from 'react'
import './Project.css'
import { chrome } from '../../assets/icons/chrome'

const Project = ({ img, link }) => {
	console.log(img)
	return (
		<div className='project-container'>
			<div className='project-browser'>
				<div className='project-browser-icon'>{chrome}</div>
				<div className='project-browser-url'>
					<div>{link}</div>
				</div>
			</div>
			<a href={link} target='_blank' rel='noreferrer'>
				<img src={img} alt='project' className='project-image' />
			</a>
			<a href='#' className='project-github-logo'>
				<i class='fab fa-github'></i>
			</a>
			<a href='#' className='project-web-logo'>
				<i class='fab fa-chrome'></i>
			</a>
		</div>
	)
}

export default Project
