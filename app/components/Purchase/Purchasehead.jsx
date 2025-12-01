import React from 'react'
import Text from "../utill/CommonText/CommonText"
import Purchasedetails from "../Purchase/Purchasedetails"
import customer1 from "../../../public/customername1.png"
import customer2 from "../../../public/customername2.png"
import customer3 from "../../../public/customername3.png"
import customer4 from "../../../public/customername5.png"
import customer5 from "../../../public/customername6.png"
import customer6 from "../../../public/customername7.png"



const Purchasehead = () => {
  return (
    <>
    <div className="border-b border-b-[#E8EDF2] flex gap-20 items-center pt-5 pb-[15px]">
        <div className="w-[18px] h-[18px] border border-[#B0BAC9]"></div>
        <Text varaiant='h6' classname='text-[#9A9AAF]'>Products</Text>
        <Text varaiant='h6' classname='text-[#9A9AAF]'>Order ID</Text>
        <Text varaiant='h6' classname='text-[#9A9AAF]'>Date</Text>
        <Text varaiant='h6' classname='text-[#9A9AAF]'>Customer name</Text>
        <Text varaiant='h6' classname='text-[#9A9AAF]'>Status</Text>
        <Text varaiant='h6' classname='text-[#9A9AAF]'>Amount</Text>
        <Text varaiant='h6' classname='text-[#9A9AAF]'>Actions</Text>
        

    </div>
    <Purchasedetails products={"MacBook Pro"} cusIamge={customer1} orderId={"#25413"} date={"Aug 5th, 2021"} pendingColor={"bg-[#50D1B2]"} 
    customerName={"Bessie Cooper"} status={"Delivered"} amount={400.00}/>

     <Purchasedetails products={"iPhone 11 Pro"} cusIamge={customer2} orderId={"#25413"} date={"Aug 5th, 2021"} pendingColor={"bg-[#EC8C56]"} 
    customerName={"Annette Black"} status={"Pending"} amount={200.00}/>

     <Purchasedetails products={"Oppo A20"} cusIamge={customer3} orderId={"#25413"} date={"Aug 5th, 2021"} pendingColor={"bg-[#50D1B2]"} 
    customerName={"Bessie Cooper"} status={"Delivered"} amount={250.00}/>

     <Purchasedetails products={"MacBook Pro"} cusIamge={customer4} orderId={"#25413"} date={"Aug 5th, 2021"} pendingColor={"bg-[#E23738]"} 
    customerName={"Kristin Watson"} status={"Canceled"} amount={400.00}/>
    
     <Purchasedetails products={"MacBook Air"} cusIamge={customer5} orderId={"#25413"} date={"Aug 5th, 2021"} pendingColor={"bg-[#50D1B2]"} 
    customerName={"Esther Howard"} status={"Delivered"} amount={100.00}/>


    <Purchasedetails products={"Samsung A50"} cusIamge={customer5} orderId={"#25413"} date={"Aug 5th, 2021"} pendingColor={"bg-[#EC8C56]"} 
    customerName={"Jerome Bell"} status={"Pending"} amount={150.00}/>

    <Purchasedetails products={"MacBook Air"} cusIamge={customer6} orderId={"#25413"} date={"Aug 5th, 2021"} pendingColor={"bg-[#EC8C56]"} 
    customerName={"Brooklyn "} status={"Canceled"} amount={150.00}/>


    </>
  )
}

export default Purchasehead