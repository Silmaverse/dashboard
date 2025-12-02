import React from 'react'
import { TbLayoutListFilled } from "react-icons/tb";


const ViewItem = () => {
  return (
    <>
    <div className="flex items-center">
        <button className='border-l-2xl w-[76px] bg-brand'>
            <TbLayoutListFilled className='text-xl text-white'/>
             
        </button>
    </div>
    </>
  )
}

export default ViewItem