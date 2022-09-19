import React from 'react'
import { FiInfo } from 'react-icons/fi'

const TabContent = () => {
  return (
    <>
    <div className="info pl-8">
        <div className="general flex gap-3 items-center">
            <FiInfo className='text-[15px]' />
            <p className='text-[20px] font-[600] font-["Inter"]'>General</p>
        </div>
        <hr class="w-[1300px] h-[2px] mt-4 bg-gray-500 opacity-50" />
    </div>

    <div className="candidate flex justify-end gap-10 pr-[75px] pt-3">
        <h2 className='font-["Inter"] font-[600] text-[18px] text-[#092D2D]'>Candidate Name 1</h2>
        <h2 className='font-["Inter"] font-[600] text-[18px] text-[#092D2D]'>Candidate Name 2</h2>
        <h2 className='font-["Inter"] font-[600] text-[18px] text-[#092D2D]'>Candidate Name 3</h2>
    </div>

    <div className="cand-age">
    <div className="general flex gap-3 items-center pl-14 mt-6">
            <FiInfo className='text-[15px]' />
            <p className='text-[18px] font-[600] font-["Inter"]'>Candidate Age</p>
        </div>

        <div className="drop-down">
            
        </div>
    </div>
    </>
  )
}

export default TabContent