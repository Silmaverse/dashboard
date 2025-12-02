import React from 'react'
import Text from "../utill/CommonText/CommonText"
import { BsThreeDotsVertical } from 'react-icons/bs'
import Sourcebars from "./DonutChart"


const Souce = () => {
  return (
    <>
    <div className="w-[363px] p-[25px] bg-[#FFFFFF] rounded-2xl" >
        <div className="heading flex justify-between items-center pb-4 border-b border-b-[#D8D8D8] ">
            <Text varaiant='h3' classname='text-blackie'>Visits by Source</Text>
            <BsThreeDotsVertical />
        </div>
        <Sourcebars/>
    </div>
    </>
  )
}

export default Souce