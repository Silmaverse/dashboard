import React from 'react'

const CommonText = ({varaiant ='p' ,classname="" ,children }) => {

  const varaints = [
    {tag:"p" , class:"text-[12px] font-popins font-normal"},
    {tag:"h3" , class:"text-base font-popins font-semibold"},
    {tag:"h4" ,class:"text-base font-popins font-medium "},
    {tag:"h5" , class:"text-base font-popins font-bold"},
    {tag:"h6", class:"text-sm font-popins font-normal"}
  ]


  const Selectedtag =varaints.find((item)=> item.tag === varaiant)

  const Selectedtagname =Selectedtag.tag


  return (
    <>

    <Selectedtagname className={`${Selectedtag.class} ${classname} `}>{children}</Selectedtagname>


    </>
  )
}

export default CommonText