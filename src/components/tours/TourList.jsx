import React from "react";
import "./tourList.css";
import TourItem from "./TourItem";

export default function TourList({ toursList }) {
  return (
    <div className="tour-list">
      {toursList.map((tour) => (
       <TourItem tour={tour} key={tour.id}/>
      ))}
    </div>
  );
}
