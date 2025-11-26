import React from 'react'
import Homebreadcrumb from "../utill/Breadcrumbs/Homebreadcrumb"
import Time from "../heading/Time"

const Heading = () => {
  return (
    <>
       <h2 className="text-[28px] font-popins font-bold ">Dashboard </h2>
        <div className="flex justify-between mt-[11px]">
        <Homebreadcrumb/>
        <Time/>
       </div>
    </>
  )
}

export default Heading