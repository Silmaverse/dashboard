import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import Image from 'next/image'
import Text from "../utill/CommonText/CommonText"



const Purchasedetails = ({products ,orderId , date , cusIamge, customerName , status ,  amount, pendingColor}) => {
  return (
    <>
     <div className="border-b border-b-[#E8EDF2] flex justify-between items-center py-[15px]">
        <div className="w-[18px] h-[18px] border border-[#B0BAC9]"></div>

        <Text varaiant='h6' classname='text-blackie'>{products}</Text>
        <Text varaiant='h6' classname='text-blackie'>{orderId}</Text>
        <Text varaiant='h6' classname='text-blackie'>{date}</Text>
        <div className="flex gap-1 items-center">
          <div className="w-6 h-6 rounded-full ">
            <Image src={cusIamge} alt="err"/>
          </div>
        <Text varaiant='h6' classname='text-blackie'>{customerName}</Text>
        </div>
        <div className="flex gap-[1px] items-center">
            <div className={`w-[7px] h-[7px] rounded-full ${pendingColor}`}></div>
        <Text varaiant='h6' classname='text-[#9A9AAF]'>    {status}</Text>
        </div>
        <Text varaiant='h6' classname='text-[#9A9AAF]'> ${amount}</Text>
       <BsThreeDotsVertical />
        

    </div>
    </>
  )
}

export default Purchasedetails