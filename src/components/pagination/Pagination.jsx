import React from "react";
import './pagination.css'

export default function Pagination({ pages, currentPage, setCurrentPage }) {
  const generatePages = [];
  for (let i = 1; i <= pages; i++) {
    generatePages.push(i);
  }

  return (
    <div className="pagination">
        <button disabled={currentPage === 1} onClick={()=>setCurrentPage((prev)=> prev-1)} className="page previous"> previuos</button>
      {generatePages.map((page) => (
        <div key={page} className={currentPage === page ? "page active": "page"} onClick={()=>setCurrentPage(page)}>
          {page}
        </div>
      ))}

<button disabled={currentPage === pages} onClick={()=>setCurrentPage((next)=> next+1)} className="page next"> Next</button>

    </div>
  );
}
