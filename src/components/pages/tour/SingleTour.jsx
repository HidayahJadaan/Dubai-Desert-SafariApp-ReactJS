import React from "react";
import { useParams } from "react-router-dom";
import { toursList } from "../../../data";
import Rating from "../../tours/Rating";
import "./singleTour.css";
import BookNow from "./BookNow";
export default function SingleTour() {
  const { id } = useParams();
  // EVERY THING IN THE URL IS A STRING
  const tour = toursList.find((tour) => tour.id === parseInt(id));
  // const tour =toursList.find((tour)=> tour.id === +id); // the same thing

  return (
    <section className="tour">
      <div className="tour-step">
        United Arab Emirates <i class="ri-arrow-right-s-line"></i>
        Things to do in Dubai <i class="ri-arrow-right-s-line"></i> Safari
        <div className="tour-category">Adventure</div>
        <h1 className="tour-title">Dubai: {tour.title}</h1>
        <div className="tour-info">
          <Rating rating={tour.rating} reviews={tour.reviews} />
          <div className="tour-provider">
            Activity Provider: <span>Hidayah Al-Jadaan</span>
          </div>
        </div>
      </div>

      <div className="tour-image-wrapper">
        <img src={tour.image} alt={tour.title} className="tour-img" />

        <BookNow priceFrom={tour.priceFrom} />
      </div>

      <p className="tour-description">
        Discover a different side of Dubai an a fun-filled safari across the
        desert. Try sandboarding, dune bashing and a camel ride, with the option
        to add an electifying quad bike ride or immersive Al Khayma Camp dinner
        experience to your adventure.
      </p>
      <div className="tour-more-information">
        <h2 className="tour-info-title">About this activity</h2>
        <div className="tour-info-item">
          <div className="tour-info-item-title">
            <i style={{color: '#27ae60'}} className="ri-calendar-2-line"></i>
            Free Cancellation
          </div>
          <p className="tour-info-item-desc">
            Cancel up to 24 hours in advance to recieve a full refund
          </p>
        </div>
        <div className="tour-info-item">
          <div className="tour-info-item-title">
            <i style={{color: '#2980b9'}} className="ri-calendar-fill"></i>
            Reserve now & pay later
          </div>
          <p className="tour-info-item-desc">
            Keep your travel plan flexible -- book your spot and pay nothing
            today.
          </p>
        </div>
        <div className="tour-info-item">
          <div className="tour-info-item-title">
            <i style={{color: '#e74c3c'}} className="ri-virus-fill"></i>
            Covid -19 precautions
          </div>
          <p className="tour-info-item-desc">
            Special health and safety measures are in place. Check your activity
            voucher once you book for full details.
          </p>
        </div>
        <div className="tour-info-item">
          <div className="tour-info-item-title">
            <i style={{color: '#8e44ad'}} className="ri-time-line"></i>
            Duration 4 - 7 hours
          </div>
          <p className="tour-info-item-desc">
          Check availability to see staring times.
          </p>
        </div>
        <div className="tour-info-item">
          <div className="tour-info-item-title">
            <i style={{color: '#2c3e50'}} className="ri-user-follow-line"></i>
            Live tour guide
          </div>
          <p className="tour-info-item-desc">
          English
          </p>
        </div>
      </div>
    </section>
  );
}
