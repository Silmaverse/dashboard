import React from 'react'
import Image from 'next/image';
import { LuSearch } from "react-icons/lu";
import { CiMicrophoneOn } from "react-icons/ci";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import { IoNotificationsOutline } from "react-icons/io5";
import Avatar from "../../../public/Avatar.png"
import logo from "../../../public/Logo Dark.png"


export const Navbar = () => {
  return (
    <>
    <section>
        <div className="container">
            <div className="navrow flex justify-between items-center py-6 px-[25px]">



            <div className="f_col flex gap-[186px] items-center">

                <div className="flex gap-[47px] items-center">

                 <div className="logo_image w-[148px] h-[39px] relative">
                   <Image src={logo} alt='logo_error' fill={true}/>
                
                </div>

                <div className="w-[360px] h-12 rounded-xl  bg-[#F5F5FA] flex justify-between items-center-safe px-[18px] py-3.5">
    
                    <div className="flex gap-2 items-center">
                        <LuSearch className="text-xl text-secondary" />
                        <input type='text' placeholder='Search' className='text-sm font-semibold font-popins border-none outline-none text-primary'/>
                    
                        <CiMicrophoneOn className='text-xl text-primary' />
                    </div>

                </div>

                <div className="w-[142px] h-4 flex justify-between items-center">

                    <div className="flex gap-[11px] items-center">
                    <FaArrowUpRightFromSquare className='text-[16px] text-secondary' />
                    <p className='text-sm font-popins font-semibold text-secondary'>Browse</p>
                    </div>

                    <IoIosArrowDown />

                </div>
                </div>
                

             </div>

             <div className="s_col flex gap-12 items-center">

                <div className="relative">
                   <TiMessages className='text-2xl text-secondary' />
                   <div className="w-2 h-2 bg-trinary rounded-full absolute top-0 right-0"></div>
                </div>
                <div className="relative">
                   <IoNotificationsOutline className='text-2xl text-secondary' />
                    <div className="w-2 h-2 bg-trinary rounded-full absolute top-0 right-0"></div>
                </div>

                   <div className="w-12 h-12 relative">
                     <Image src={Avatar} fill={true} alt='avatar_error'/>
                   </div>
             </div>

            </div>

        </div>
    </section>
    
    </>
  )
}

export default Navbar;
