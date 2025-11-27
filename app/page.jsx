import Image from "next/image";
import Heading from "./components/heading/Heading"
import DashbardCard from "./components/utill/Dashboard/DashboardCard"
import Charts from "./components/Salesperformances/Charts"
import BestSeller from "../app/components/Salesperformances/BestSellers"

export default function Home() {
  return (
    <>
    <div className="w-full h-full bg-[#F5F5FA] px-[25px] py-9 ">
      <Heading/>

      <div className="mt-[38px] flex gap-[24.8px] items-center">
       <DashbardCard title={"Total sells"} bgcolor={"bg-[#50D1B2]"} totalSells={"126.500"} percentage={"34.7"}/>
       <DashbardCard title={"Orders value"} bgcolor={"bg-[#2775FF]"} totalSells={"136.800"} percentage={"22.8"}/>
       <DashbardCard title={"Daily orders"} bgcolor={"bg-[#7747CA]"} totalSells={"25.200"} percentage={"17.8"}/>
       <DashbardCard title={"Daily Revenue"} bgcolor={"bg-[#FB7BB8]"} totalSells={"12.125"} percentage={"23.9"}/>
      </div>

      <div className="flex gap-[18px] items-start mt-6">
        <Charts/>
        <BestSeller/>
      </div>
      
    </div>

    </>
  );
}
