import React from 'react'
import { RiHome5Line } from "react-icons/ri";
import { MdChevronRight } from "react-icons/md";
import Text from "../../utill/CommonText/CommonText"



const Homebreadcrumb = ({name}) => {
  return (
    <>
    <div className="flex gap-[7px] items-center">

        <div className="flex gap-[3px] items-center">
            <RiHome5Line className='text-[12px]' />
             <Text varaiant='p' classname='text-secondary'>Home</Text>
        </div>
        <MdChevronRight className='text-[12px]' />
         <Text varaiant='p' classname='text-brand'>{name}</Text>
      
    </div>

    </>
  )
}

export default Homebreadcrumb