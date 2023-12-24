import React from 'react'
import './SortInput.css'

export default function SortInput({toursLength, setSortItem, sortItem}) {
  return (
    <div className='sort-input-container'>
        <div className="avialable-tours">
           {toursLength} tours found <i class="ri-information-line"></i>
        </div>

            <select value={sortItem} onChange={(e)=>setSortItem(e.target.value)}>
                <option value="recomended">Recomended</option>
                <option value="low">Price - Low to high</option>
                <option value="high">Price - High to low</option>
            </select>

        </div>
  );
}
