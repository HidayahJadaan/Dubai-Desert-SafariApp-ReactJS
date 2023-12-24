import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import HeroHeader from './components/hero-header/HeroHeader';
import Pagination from './components/pagination/Pagination';
import Services from './components/services/Services';
import TourList from './components/tours/TourList';
import {toursList} from './data'
import SortInput from './components/sort-input/SortInput';
import Banner from './components/banner/Banner';

function App() {
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
    <div className="App">
    <Header />
    <HeroHeader />
    <Services />
    <SortInput setSortItem={setSortItem} sortItem={sortItem} toursLength={toursList.length} />
    <TourList toursList={tours}/>
    <Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />

    <Banner />
    </div>
  );
}

export default App;
