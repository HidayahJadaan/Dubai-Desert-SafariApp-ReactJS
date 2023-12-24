import React from 'react'
import "./services.css"

export default function Services() {
  return (
    <div className='services'>
        <div className="service-item">
        <i class="ri-image-fill service-icon"></i>
            Adventures
        </div>

        <div className="service-item">
        <i class="ri-team-line service-icon"></i>
            Family tours
        </div>
        <div className="service-item">
        <i class="ri-community-fill service-icon"></i>
            City cards
        </div>
        <div className="service-item">
        <i class="ri-globe-fill service-icon"></i>
            Multi-day trips
        </div>
    </div>
  )
}
