import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import HeroHeader from './components/hero-header/HeroHeader';
import Pagination from './components/pagination/Pagination';
import Services from './components/services/Services';
import TourList from './components/tours/TourList';
import {toursList} from './data'

function App() {
// Algorithm For Pagination
  const [currentPage, setCurrentPage]=  useState(1);
  const  TOUR_PER_PAGE = 6; // as you like
  const pages =Math.ceil(toursList.length / TOUR_PER_PAGE ); // 24/6 = 4
  const startIndex = (currentPage - 1 ) * TOUR_PER_PAGE;
  const endIndex = currentPage * TOUR_PER_PAGE;
  const tours = toursList.slice(startIndex, endIndex); //new array contains tours per page for each page



  return (
    <div className="App">
    <Header />
    <HeroHeader />
    <Services />
    <TourList toursList={tours}/>
    <Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
