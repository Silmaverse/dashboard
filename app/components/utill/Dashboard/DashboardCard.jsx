import React from 'react'
import Text from "../../utill/CommonText/CommonText"
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiDeleteBin2Line } from "react-icons/ri";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";



const DashboardCard = ({title, bgcolor ,totalSells ,percentage }) => {
  return (
    <>
    <div className="w-[265px] bg-[#FFFFFF] rounded-2xl border border-[#E8EDF2] px-4 pt-4 pb-2.5">
        <div className="flex justify-between">
          <Text varaiant='p' classname='text-secondary'>{title}</Text>
          <BsThreeDotsVertical />
        </div>

          <div className="flex justify-between mt-4">
            <div className="bin flex gap-2 items-center">
                <div className={`w-8 h-8 rounded-4xl ${bgcolor} flex justify-center items-center`}>
                    <RiDeleteBin2Line className='text-white text-base'/>
                </div>
                    <Text varaiant='h5' classname='text-blackie'>${totalSells}</Text>
            </div>
            <div className="percentage flex gap-2 items-center">
                <FaArrowUpRightFromSquare className='text-[13px] text-[#50D1B2]' />
                <Text varaiant='h4' classname='text-[#50D1B2]'>${percentage}%</Text>

            </div>


          </div>

          <p className='text-[11px] font-popins font-normal text-end mt-2.5'>Compared to Jan 2022</p>

    </div>
    
    </>
  )
}

export default DashboardCard