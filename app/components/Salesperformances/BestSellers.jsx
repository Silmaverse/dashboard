import React from 'react'
import Text from "../utill/CommonText/CommonText"
import { BsThreeDotsVertical } from "react-icons/bs";
import SellerCard from "../Salesperformances/SellerCard"
import sellericon from "../../../public/sellericon1.png"


const BestSellers = () => {
  return (
    <> 
    <div className="w-[364px]  rounded-2xl bg-[#FFFFFF] pt-[15px] pb-[22px] px-6">
        <div className="heading flex justify-between items-center pb-4 border-b border-b-[#D8D8D8]">
            <Text varaiant='h3' classname='text-blackie'>Best Sellers</Text>
            <BsThreeDotsVertical />
        </div>

        <div className="mt-5">

        <div className="flex flex-col gap-5">
          <SellerCard cardImg={sellericon} cardtitle={"Esther Howard"} auttor={"Louis Vuitton"} price={778.35} totalSales={"1258 sales"}/>
          <SellerCard cardImg={sellericon} cardtitle={"Wade Warren"} auttor={"Binford Ltd."} price={576.28} totalSales={"1028 sales"}/>
          <SellerCard cardImg={sellericon} cardtitle={"Cameron Williamson"} auttor={"MasterCard"} price={446.61} totalSales={"1258 sales"}/>
          <SellerCard cardImg={sellericon} cardtitle={"Jenny Wilson"} auttor={"Pizza Hut"} price={406.27} totalSales={""}/>
          <SellerCard cardImg={sellericon} cardtitle={"Leslie Alexander"} auttor={"Apple"} price={396.84} totalSales={"875 sales"}/>
          <SellerCard cardImg={sellericon} cardtitle={"Kristin Watson"} auttor={"Starbucks"} price={351.02} totalSales={"630 sales"}/>
          
        </div>

        </div>

    </div>
    </>
  )
}

export default BestSellers