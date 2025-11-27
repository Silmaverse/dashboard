import React from 'react'
import Image from 'next/image'
import Text from "../utill/CommonText/CommonText"



const SellerCard = ({cardImg ,cardtitle , auttor , price , totalSales }) => {
  return (
    <>

    <div className="flex justify-between items-center mt-5">
        <div className="flex gap-3">
        <div className="cardimage w-10 h-10 rounded-lg relative">
            <Image src={cardImg} alt='error'/>
        </div>
        <div className="">
            <Text varaiant='h6' classname='text-blackie' > {cardtitle}</Text>
            <Text varaiant='p' classname='text-[#9A9AAF] mt-4' >{auttor}</Text>
        </div>
        </div>

        <div className="">
            <Text varaiant='h6' classname='text-blackie text-semibold!' >${price}</Text>
            <Text varaiant='p' classname='text-[#9A9AAF] mt-4' >${totalSales}</Text>
        </div>

    </div>
   
    </>
  )
}

export default SellerCard