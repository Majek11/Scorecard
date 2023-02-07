import React from 'react'
import { candidates } from '../utils/candidate'
import { GoPrimitiveDot } from 'react-icons/go'

const Score = () => {
  return (
    <div className='p-16'>
        <h1 className='text-[16px] text-[#092D2D] font-["Inter"] font-[700] pb-3 pl-2'>Legend & Score</h1>
        <p className='flex text-[17px] font-["Inter"] text-[#0F4C4B]'> <GoPrimitiveDot size={30} className= 'text-[#0F4C4B]' /> {candidates.name} = 70 points</p>
        <p className='flex text-[17px] font-["Inter"] text-[#0F4C4B]'> <GoPrimitiveDot size={30}  className= 'text-[#87A5A5]'/> {candidates.name} = 55 points</p>
        <p className='flex text-[17px] font-["Inter"] text-[#0F4C4B]'> <GoPrimitiveDot size={30} className= 'text-[#277d7d]' /> {candidates.name} = 40 points</p>
    </div>
  )
}

export default Score