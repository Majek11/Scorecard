import React from 'react'
import { useState, useEffect } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'

const DropDown = ({selected, setSelected, options, title}) => {
    

    const [isActive, setIsActive] = useState(false);
    const [selectedOption, setSelectedOption] = useState(selected.label)
    
    useEffect(() => {
        if (selected)
            setSelected(selected)
    }, []) 
  return (
    <div className='pl-[230px]'>
        <div className="dropdown w-[220px] my-auto -mx-14 relative select-none">
            <div className='dropdown-btn px-3.5 py-5 bg-gray-200 border-[1px] border-[#b3b3b3] font-[800] font-["Nunito_Sans"] text-[#828282] flex items-center justify-between cursor-pointer text-[14px]' onClick={(e) => setIsActive(!isActive)}>
                {selectedOption}
                <IoMdArrowDropdown size={22} />
            </div>
            {isActive && (
                <div className="dropdown-content absolute top-[110%] z-10 p-[10px] left-0 bg-[#fff] font-bold text-[#333] w-[100%] border-[1px] border-[#e5e5e5] rounded-[10px] cursor-pointer">
                    {
                        options.map((option, index) => (
                            <div key={index} onClick={(e) => { setSelected (option); setSelectedOption(option.label); setIsActive(false) }} className="dropdown-item p-[10px]  hover:bg-[#f1eeee] transition-all ">
                                {option.label}
                            </div>
                        ))
                    }
                </div>
            )}
    </div>
    </div>
  )
}

export default DropDown