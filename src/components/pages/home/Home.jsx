import React, { useState } from 'react'
import HeroHeader from '../../hero-header/HeroHeader'
import Services from '../../services/Services'
import SortInput from '../../sort-input/SortInput'
import TourList from '../../tours/TourList'
import Pagination from '../../pagination/Pagination'
import Banner from '../../banner/Banner'
import NewsLetter from '../../news-letter/NewsLetter'
import { toursList } from '../../../data'

export default function Home() {
    // Algorithm For Pagination
  const [currentPage, setCurrentPage]=  useState(1);
  const [sortItem, setSortItem]=  useState("recomended");
  const  TOUR_PER_PAGE = 6; // as you like
  const pages =Math.ceil(toursList.length / TOUR_PER_PAGE ); // 24/6 = 4
  const startIndex = (currentPage - 1 ) * TOUR_PER_PAGE;
  const endIndex = currentPage * TOUR_PER_PAGE;
  
  // SORTING TOURS
  const sortedToursList = sortItem === "low" ? toursList.sort((a,b)=> a.priceFrom - b.priceFrom) : sortItem === "high" ?
    toursList.sort((a,b)=> b.priceFrom - a.priceFrom) : toursList;
    
    const tours = sortedToursList.slice(startIndex, endIndex); //new array contains tours per page for each page

  return (
    <div>
        <HeroHeader />
    <Services />
    <SortInput setSortItem={setSortItem} sortItem={sortItem} toursLength={toursList.length} />
    <TourList toursList={tours}/>
    <Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />

    <Banner />
    <NewsLetter />
    </div>
  )
}
