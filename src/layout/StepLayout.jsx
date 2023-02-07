import React from 'react'
import { Outlet } from 'react-router-dom'
import CandScoreCard from '../components/CandScoreCard'
import TabContent from '../components/TabContent'
import Tabs from '../components/Tabs'

const StepLayout = () => {
  return (
    <div className='step-layout'>
        <CandScoreCard />
        <Tabs />
        <Outlet />
    </div>
  )
}

export default StepLayout