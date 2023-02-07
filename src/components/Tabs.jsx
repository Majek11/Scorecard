import { useState, useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const tabsMap = {
  general: 0,
  manifesto: 1,
  knowledge: 2,
  global: 3,
  values: 4,
  summary: 5
}

const Tabs = () => {
  const { pathname } = useLocation()
  const [indicatorSize, setIndicatorSize] = useState(200)
  const tabRef = useRef(null)
  const handleSize = () => {
    if (tabRef.current) {
      setIndicatorSize(tabRef.current.clientWidth)
    }
  }
  
  useEffect(() => {
    handleSize()
    window.onresize = handleSize
    return () => {
      window.onresize = null
    }
    
  }, [tabRef.current, pathname])

  return (
    <div>
    <div className='tab flex uppercase text-[17px] font-["Nunito_Sans"] justify-around space-x-18 pt-20 mt-14 text-[#0F4C4B] text-center font-[600] relative'>
        <p className='flex-1 py-3 px-2' ref={tabRef}>General</p>
        <p className='flex-1 py-3 px-2'>Manifesto</p>
        <p className='flex-1 py-3 px-2'>Knowledge & Political History </p>
        <p className='flex-1 py-3 px-2'>Global & Business Exposure</p>
        <p className='flex-1 py-3 px-2'>Values</p>
        <p className='flex-1 py-3 px-2'>Summary</p>
        <div className='w-[200px] h-[4px] bg-[#0F4C4B] absolute bottom-0 transition-all duration-300' style={{ left: tabsMap[pathname.split('/').slice(-1)] * indicatorSize, width: indicatorSize }}></div>
      </div>
    </div>
  )
}

export default Tabs