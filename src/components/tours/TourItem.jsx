import React from 'react'
import Rating from './Rating'
import { Link } from 'react-router-dom'
export default function TourItem({tour}) {
  return (
    <div className="tour-item">
    <img src={tour.image} alt={tour.title} className="tour-item-img" />
    <span className="tour-item-label">Adventure</span>
    <div className="tour-item-body">
      <div className="tour-item-title">{tour.title}</div>
      <div className="tour-item-duration">
        <span>{tour.duration}</span> Pickup available
      </div>
     <Rating rating={tour.rating} reviews={tour.reviews}/>
      <div className="tour-item-price">
        <strong>From ${tour.priceFrom} . </strong>per person
      </div>
      {/* <button className="tour-item-link">See more</button> */}

      <Link to={`/tour/${tour.id}`} className='tour-item-link'>see more</Link>
    </div>
  </div>
  )
}
