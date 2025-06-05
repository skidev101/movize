import React from 'react'
import './RatingCircle.css'

const RatingCircle = ({ rating }) => {
	const angle = (rating / 100) * 360;
	
	return (
		<div className="circle-wrapper">
			<div 
			  className="circle"
			  style={{ background: `conic-gradient(green ${angle}deg, #333 0deg`}}
			>
				<div className="rate-wrapper">
					<span>{rating}%</span>
				</div>
			</div>
		</div>
	)
}

export default RatingCircle