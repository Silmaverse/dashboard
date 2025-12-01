import React from 'react'
import Market from "../Bars/Market"
import Revenue from "../Bars/Revenue"
import Source from "../Bars/Souce"



const Allbars = () => {
  return (
    <>
    <div className="flex justify-between items-center mt-[33px]">

        <Market/>
        <Revenue/>
        <Source/>

 
    </div>
    </>
  )
}

export default Allbars