import React from 'react'
import Text from "../utill/CommonText/CommonText"



const Footer = () => {
  return (
    <>
    <footer className='border-t border-[#E8EDF2] py-[25px] mt-7'>
      <div className="flex justify-between items-center">
        <div className="lefttext">
          <Text varaiant='p' classname='text-[#9A9AAF]'>© 2022 - <span className='text-brand'>Frox</span>  Dashboard  . Made by <span className='text-brand'>AliThemes</span></Text>
        </div>
        <div className="righttext flex  gap-[15px] items-center">
          <Text classname='text-[#9A9AAF]'>About</Text>
           <Text classname='text-[#9A9AAF]'>Careers</Text>
            <Text classname='text-[#9A9AAF]'>Policy</Text>
             <Text classname='text-[#9A9AAF]'>Contact</Text>
        </div>



      </div>


    </footer>
    </>
  )
}

export default Footer