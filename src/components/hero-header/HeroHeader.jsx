import React from 'react'
import "./hero-header.css"

export default function HeroHeader() {
  return (
    <div className='hero-header'>
        <div className="search-box">
            <div className="input-wrapper">
            <i class="ri-search-line"></i>
                <input type="search" placeholder='What are you looking for?' className='search-box-input' />
            </div>
            <button className='search-box-btn'>Search</button>
        </div>

        <div className="hero-header-title">
            <h3>Dubai</h3>
            <h1>Desert Safaries</h1>
        </div>
    </div>
  )
}
