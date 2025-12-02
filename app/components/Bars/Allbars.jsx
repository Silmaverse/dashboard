import React from 'react'
import Market from "../Bars/Market"
import Revenue from "../Bars/Revenue"
import Source from "../Bars/Souce"



const Allbars = () => {
  return (
    <>
    <div className="flex gap-6 items-center mt-[33px]">

        <Market/>
        <Source/>
        <Revenue/>

 
    </div>
    </>
  )
}

export default Allbars