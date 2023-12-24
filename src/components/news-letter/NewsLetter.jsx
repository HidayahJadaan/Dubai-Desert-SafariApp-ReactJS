import React from "react";
import "./newsLetter.css";
import newsLetter from "../../images/newsletterimage.jpg";
export default function NewsLetter() {
  return (
    <div className="news-letter">
      <div className="news-letter-container">
        <div className="news-letter-image-wrapper">
          <img
            src={newsLetter}
            alt="news=letter"
            className="news-letter-image"
          />
        </div>

        <div className="news-letter-content">
          <h2 className="news-letter-content-title">
            Your Dubai Is Itinerary Waiting
          </h2>

          <p className="news-letter-content-desc">
            Recieve a curated 48-hour itinerary featuring the most iconic
            experience in Dubai, straight to your inbox.
          </p>
          <div className="news-letter-inputs">
            <input type="text" placeholder="your email" className="news-letter-input" />
            <button className="news-letter-btn">
                Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
