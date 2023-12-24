import React from 'react'
import "./banner.css"
import SkySCrapper from "../../images/skyscrepper.jpg"

export default function Banner() {
  return (
    <div className='banner'>
<div className="banner-wrapper">
    <div className="banner-layout">
        <h1 className='banner-layout-title'>DUBAI IS WAITING FOR YOU</h1>
    </div>

    <img src={SkySCrapper} alt="Dubai-abnner" className='banner-img'/>
</div>

    </div>
  );
}
