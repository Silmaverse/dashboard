import React from 'react'
import Text from "../utill/CommonText/CommonText"
import { BsThreeDotsVertical } from "react-icons/bs";
import Status from "../Salesperformances/Status"

const Charts = () => {
  return (
    <>
    <div className="w-[752px] py-6 px-6 border border-[#E8EDF2] rounded-2xl  bg-white">
        <div className="heading flex justify-between">
        <Text varaiant='h3' classname='text-blackie'>Sales Performance</Text>
        <div className="flex gap-[13px] items-center">
        <Text varaiant='p' classname='text-[#9A9AAF]'>Today’s</Text>
        <Text varaiant='p' classname='text-brand border-b border-b-brand'>Monthly</Text>
         <Text varaiant='p' classname='text-[#9A9AAF]'>Yearly</Text>
         <BsThreeDotsVertical className='text-[#9A9AAF]' />
        </div>

        </div>
        <div className="flex gap-6 items-center my-5">
            <Status title={"Completed"} bgcolor={"bg-[#FC8D9D]"}/>
            <Status title={"Pending"} bgcolor={"bg-[#F3BCFD]"}/>
            <Status title={"Unpaid"} bgcolor={"bg-[#80B7FB]"}/>
            <Status title={"Delivered"} bgcolor={"bg-[#B9A2FB]"}/>
        </div>
    </div>
    </>
  )
}

export default Charts