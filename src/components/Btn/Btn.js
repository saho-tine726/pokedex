import React from 'react'
import './Btn.css'

export const Btn = ({handlePrevPage, handleNextPage, prevURL, nextURL}) => {
  return (
    <div className="btn">
    {prevURL && <div className="btn_prev"><button onClick={handlePrevPage}></button></div>}
    {nextURL && <div className="btn_next"><button onClick={handleNextPage}></button></div>}
  </div>
  )
}
