import React from 'react'
import Text from "../utill/CommonText/CommonText"
import { BsThreeDotsVertical } from 'react-icons/bs'
import Purchasehead from './Purchasehead'

const Purchasecard = () => {
  return (
    <>
    <div className="w-[1135px] p-[25px] bg-[#FFFFFF] rounded-2xl mt-6">
         <div className="heading flex justify-between items-center pb-4 border-b border-b-[#D8D8D8]">
            <Text varaiant='h3' classname='text-blackie'>Recent Purchases</Text>
            <BsThreeDotsVertical />
        </div>
        <div className="">
            <Purchasehead/>
        </div>
    </div>
    </>
  )
}

export default Purchasecard