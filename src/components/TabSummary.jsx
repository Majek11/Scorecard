import React from 'react'

const TabSummary = () => {
  return (
    <div>
        <div className='tab flex uppercase text-[16px] font-["Nunito_Sans"] justify-around space-x-18 gap-[70px] pt-20 mt-14 text-[#0F4C4B] text-center font-[600] '>
        <p className="font-[600]">General</p>
        <p className="relative -top-[42px] leading-10"> Knowledge & <br /> Political History </p>
        <p>Manifesto</p>
        <p className="relative -top-[42px] leading-10">Global & <br /> Business Exposure</p>
        <p>Values </p>
        <p>Summary <div className="w-[200px] h-[4px] mt-2 bg-[#0F4C4B]"></div></p>
      </div>
    </div>
  )
}

export default TabSummary