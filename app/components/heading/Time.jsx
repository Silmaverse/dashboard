import React from 'react'
import { TbCalendarMonthFilled } from "react-icons/tb";
import Text from "../utill/CommonText/CommonText"


const Time = () => {
  return (
    <>
    <div className="flex gap-[7px] items-center">
        <TbCalendarMonthFilled className="text-secondary"/>
        <Text varaiant='p' classname='text-secondary'>Feb 15, 2022 - Feb 21, 2022</Text>
    </div>
    </>
  )
}

export default Time