import React from 'react'
import { HiOutlinePresentationChartLine } from "react-icons/hi2";
import Image from 'next/image';
import logo from "../../../public/Logo Dark.png"
import { CiShop } from "react-icons/ci";
import { AiOutlineProduct } from "react-icons/ai";




const leftSidebar = () => {
  return (
    <>

    <div className="px-[25px] py-7 bg-[#ffffff] h-screen ">

        <div className="">

            <div className="w-[206px] h-14 bg-brand py-[22px] pl-[21px]  rounded-xl flex gap-[3px]  items-center">
                <HiOutlinePresentationChartLine className='text-[22px] text-white' />
                <p className='text-sm font-popins font-semibold text-white'>Dashboard</p>

            </div>

             <div className="w-[206px] h-14 bg-white py-[22px] pl-[21px]  rounded-xl flex gap-[3px]  items-center">
                <CiShop className='text-[22px] text-secondary' />
                <p className='text-sm font-popins font-semibold text-secondary'>Products</p>

            </div>

             <div className="w-[206px] h-14 bg-white py-[22px] pl-[21px]  rounded-xl flex gap-[3px]  items-center">
                <AiOutlineProduct className='text-[22px] text-secondary' />
                <p className='text-sm font-popins font-semibold text-secondary'>Orders</p>

            </div>



        </div>
    

    </div>
    
    </>
  )
}

export default leftSidebar