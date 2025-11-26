import React from 'react'
import Text from "../utill/CommonText/CommonText"

const Status = ({bgcolor ,title}) => {
  return (
    <>

    <div className="flex gap-[7px] items-center">

    <div className={`w-4 h-4 rounded-[3px]  ${bgcolor}`}>
    </div>
        <Text varaiant='p' classname='text-secondary'>{title}</Text>
    </div>
    
    </>
  )
}

export default Status