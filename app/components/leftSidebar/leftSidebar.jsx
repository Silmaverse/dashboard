import React from 'react'
import { HiOutlinePresentationChartLine } from "react-icons/hi2";
import Image from 'next/image';
import logo from "../../../public/Logo Dark.png"
import { CiShop } from "react-icons/ci";
import { AiOutlineProduct } from "react-icons/ai";
import { MdOutlinePayment } from "react-icons/md";
import { MdAspectRatio } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { LuSquarePlus } from "react-icons/lu";
import { GoPlusCircle } from "react-icons/go";
import cardicon1 from "../../../public/img.png"
import cardicon2 from "../../../public/cardicon.png"
import cardicon3 from "../../../public/cardicon2.png"
import cardicon4 from "../../../public/cardicon3.png"
import vector from "../../../public/Vector.png"
import man from "../../../public/man.png"
import star from "../../../public/diamond.png"
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";
import { LuSquareArrowUpRight } from "react-icons/lu";





const leftSidebar = () => {
  return (
    <>

    <div className="px-[25px] py-7 bg-[#ffffff] h-screen border-r-2 border-r-[#E8EDF2]">

        <div className="border-b border-b-[#E8EDF2]">

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

             <div className="w-[206px] h-14 bg-white py-[22px] pl-[21px]  rounded-xl flex gap-[3px]  items-center">
                <MdOutlinePayment className='text-[22px] text-secondary' />
                <p className='text-sm font-popins font-semibold text-secondary'>Payments</p>

            </div>

             <div className="w-[206px] h-14 bg-white py-[22px] pl-[21px]  rounded-xl flex gap-[3px]  items-center">
                <MdAspectRatio className='text-[22px] text-secondary' />
                <p className='text-sm font-popins font-semibold text-secondary'>Transactions</p>

            </div>

            <div className="w-[206px] h-14 bg-white py-[18px] pl-[21px]  rounded-xl flex gap-[3px]  items-center">
                <FaUsers className='text-[22px] text-secondary' />
                <p className='text-sm font-popins font-semibold text-secondary'>Clients</p>

            </div>




        </div>


        <div className="mt-[33px]  border-b border-b-[#E8EDF2] pb-[22px]">
          <h2 className='text-[12px] font-popins font-semibold text-blackie'>Categories</h2>

          <div className="flex justify-between items-center mt-3">
            <p className='text-sm font-popins font-normal text-secondary'>Laptops </p>
              <div className="w-[18px] h-[18px] rounded-sm bg-[#ECE663] flex justify-center items-center text-[11px] font-popins font-medium">8</div>
          </div>

          <div className="flex justify-between items-center mt-3">
            <p className='text-sm font-popins font-normal text-secondary'>Mobile phones </p>
              <div className="w-[18px] h-[18px] rounded-sm bg-[#EC8C56] flex justify-center items-center text-[11px] font-popins font-medium">6</div>
          </div>

          <div className="flex justify-between items-center mt-3">
            <p className='text-sm font-popins font-normal text-secondary'>Desktops</p>
              
          </div>

          <div className="flex justify-between items-center mt-3">
            <p className='text-sm font-popins font-normal text-secondary'>Accessories</p>
            <div className="w-[18px] h-[18px] rounded-sm bg-[#FB7BB8] flex justify-center items-center text-[11px] font-popins font-medium">5</div>
              
          </div>

          <div className="flex justify-between items-center mt-3">
            <p className='text-sm font-popins font-normal text-secondary'>Portable storage</p>
            <div className="w-[18px] h-[18px] rounded-sm bg-[#50D1B2] flex justify-center items-center text-[11px] font-popins font-medium">5</div>
              
          </div>

           <div className="flex justify-between items-center mt-3">
            <p className='text-sm font-popins font-normal text-secondary'>Networking</p>
              
          </div>

          <div className="mt-3.5 flex gap-3 items-start">
            <LuSquarePlus className='text-secondary text-[13px]' />
            <p className='text-[12px] font-popins font-semibold text-blackie'>Add category</p>
          </div>





        </div>

        <div className="pt-[35px] pb-[39px] border-b border-b-[#E8EDF2]">
          <h2 className='text-[12px] font-semibold font-popins'>Top Sellers</h2>

          <div className="sellerimages flex items-center mt-[15px] ">

             <div className="image1 w-9 h-9 rounded-full border-[3.5px] border-[#F5F5FA] relative z-1">

              <Image src={cardicon1} alt='photo_err' fill={true} />

              <div className="image2 w-9 h-9 rounded-full border-[3.5px] border-[#F5F5FA]  absolute -right-6.5 -top-0.5 -z-1">
                <Image src={cardicon2} alt='photo_err' fill={true} />

               <div className="image2 w-9 h-9 rounded-full border-[3.5px] border-[#F5F5FA]  absolute -right-6.5 -top-0.5 -z-1">
                <Image src={cardicon3} alt='photo_err' fill={true} />


                <div className="image2 w-9 h-9 rounded-full border-[3.5px] border-[#F5F5FA]  absolute -right-6.5 -top-0.5 -z-1">
                <Image src={cardicon4} alt='photo_err' fill={true} />


                  <div className="w-9 h-9 rounded-full border-[3.5px] border-[#F5F5FA] bg-brand absolute -right-6.5 -top-0.5 -z-1 flex justify-center items-center">
                    <GoPlusCircle className='text-base text-black'/>


                  </div>

              </div>

              </div>

              </div>


             </div>
             

          </div>


        </div>

        <div className="mt-[35]">

          <div className="upgrade_now w-[206px] h-[284px] rounded-xl bg-[#E8EDF2] pt-[22px] pl-[31px]">
           
            <Image src={vector} alt='err' />

            <Image src={man} alt='err' />
            <div className="pl-[133px] mt-[5px]">

               <Image src={star} alt='err'  />
            </div>


          <div className="w-[144px]">
            <h2 className='w-full text-[12px] font-popins font-normal text-blackie text-center'>Unlock more information now 
by Upgrade to PRO</h2>

           <button className='w-[122px] h-8 mt-[28px] bg-brand rounded-sm text-[12px] font-popins font-semibold text-[#FFFFFF] py-[7px]'>Upgrade Now</button>


          </div>
          </div>



        </div>

        <div className="mt-[497px]">
           <div className="w-[206px] h-[53px] bg-[#E8EDF2] py-4 px-[19px] flex justify-between items-center rounded-xl">
            <button className='flex gap-3 items-center pr-5 border-r border-r-[#FFFFFF]'>
              <IoMoonOutline className='text-base text-primary' />
              <div className="w-12 h-4 rounded-2xl bg-primary relative">
                 <div className="w-6 h-6 rounded-full bg-brand absolute right-0 -top-3 translate-y-2 "></div>
              </div>
              <MdOutlineWbSunny className='text-base text-[#EC8C56]' />
            </button>

            <LuSquareArrowUpRight className='text-2xl text-secondary' />


           </div>
        </div>
    

    </div>
    
    </>
  )
}

export default leftSidebar