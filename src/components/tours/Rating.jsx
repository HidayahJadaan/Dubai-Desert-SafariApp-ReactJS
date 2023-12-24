import React from "react";

export default function Rating({rating, reviews}) {
  return (
    <div className="rating">
      {rating >= 1 ? (
        <i class="ri-star-fill"></i>
      ) : rating >= 0.5 ? (
        <i class="ri-star-half-line"></i>
      ) : (
        <i class="ri-star-line"></i>
      )}

      {rating >= 2 ? (
        <i class="ri-star-fill"></i>
      ) : rating >= 1.5 ? (
        <i class="ri-star-half-line"></i>
      ) : (
        <i class="ri-star-line"></i>
      )}

      {rating >= 3 ? (
        <i class="ri-star-fill"></i>
      ) : rating >= 2.5 ? (
        <i class="ri-star-half-line"></i>
      ) : (
        <i class="ri-star-line"></i>
      )}

      {rating >= 4 ? (
        <i class="ri-star-fill"></i>
      ) : rating >= 3.5 ? (
        <i class="ri-star-half-line"></i>
      ) : (
        <i class="ri-star-line"></i>
      )}

      {rating >= 5 ? (
        <i class="ri-star-fill"></i>
      ) : rating >= 4.5 ? (
        <i class="ri-star-half-line"></i>
      ) : (
        <i class="ri-star-line"></i>
      )}

      <span>{rating}</span>
      <span>({reviews} reviews)</span>
    </div>
  );
}
