import React from "react";
import "./tourList.css";

export default function TourList({ toursList }) {
  return (
    <div className="tour-list">
      {toursList.map((tour) => (
        <div className="tour-item">
          <img src={tour.image} alt={tour.title} className="tour-item-img" />
          <span className="tour-item-label">Adventure</span>
          <div className="tour-item-body">
            <div className="tour-item-title">{tour.title}</div>
            <div className="tour-item-duration">
              <span>{tour.duration}</span>Pickup available
            </div>
            <div>Rating...</div>
            <div className="tour-item-price">
              <strong>From ${tour.priceFrom} . </strong>per person
            </div>
            <button className="tour-item-link">See more</button>
          </div>
        </div>
      ))}
    </div>
  );
}
