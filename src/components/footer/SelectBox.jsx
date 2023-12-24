import React from 'react'

export default function SelectBox({arr, label}) {
  return (
    <div className="select-box">
    <label className="select-box-label">{label}</label>
    <select className="select-box-input">
        {arr.map((item)=> <option key={item.id}>{item.value}</option>)}
    </select>
</div>
  )
}
