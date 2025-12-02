import React from 'react'
import Homebreadcrumb from "../utill/Breadcrumbs/Homebreadcrumb"
import Time from "../heading/Time"

const Heading = ({title , name , RightSide}) => {
  return (
    <>
       <h2 className="text-[28px] font-popins font-bold "> {title} </h2>
        <div className="flex justify-between mt-[11px]">
        <Homebreadcrumb name={name}/>
         {RightSide}
       </div>
    </>
  )
}

export default Heading