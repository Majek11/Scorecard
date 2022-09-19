import React from 'react'
import { useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'

const DropDown = ({selected, setSelected, options, title}) => {
    

    const [isActive, setIsActive] = useState(false);
    // const option = ['React', 'Vue', 'Angular']
    // const option1 = ['React', 'Vue', 'Angular']
  return (
    <div>
        <div className="dropdown w-[180px] mx-[100px] my-auto relative select-none">
            <div className="dropdown-btn px-4 py-2 bg-gray-200 border-[1px] border-[#d1d0d0] font-bold text-[#333] flex items-center justify-between cursor-pointer" onClick={(e) => setIsActive(!isActive)}>
                {title}
                <BiChevronDown size={25} />
            </div>
            {isActive && (
                <div className="dropdown-content absolute top-[110%] p-[10px]  left-0 bg-[#f0f6f6] font-bold text-[#333] w-[100%] border-[1px] border-[#e5e5e5] rounded-[10px] cursor-pointer">
                    {options.map((option) => (
                <div onClick={(e) => {
                    setSelected (option)
                    setIsActive(false)
                }
                    
                    } className="dropdown-item p-[10px] hover:bg-[#f1eeee] transition-all ">
                    {option}
                </div>

                    ))}
                </div>
            )}
    </div>
        <div className="dropdown w-[180px] mx-[100px] my-auto relative select-none">
            <div className="dropdown-btn px-4 py-2 bg-gray-200 border-[1px] border-[#d1d0d0] font-bold text-[#333] flex items-center justify-between cursor-pointer" onClick={(e) => setIsActive(!isActive)}>
                {selected}
                <BiChevronDown size={25} />
            </div>
            {isActive && (
                <div className="dropdown-content absolute top-[110%] p-[10px]  left-0 bg-[#f0f6f6] font-bold text-[#333] w-[100%] border-[1px] border-[#e5e5e5] rounded-[10px] cursor-pointer">
                    {options.map((option1) => (
                <div onClick={(e) => {
                    setSelected (option1)
                    setIsActive(false)
                }
                    
                    } className="dropdown-item p-[10px] hover:bg-[#f1eeee] transition-all ">
                    {option1}
                </div>

                    ))}
                </div>
            )}
    </div>
        {/* <div className="dropdown w-[180px] mx-[100px] my-auto relative select-none">
            <div className="dropdown-btn px-4 py-2 bg-gray-200 border-[1px] border-[#d1d0d0] font-bold text-[#333] flex items-center justify-between cursor-pointer" onClick={(e) => setIsActive(!isActive)}>
                {selected} 
                <BiChevronDown size={25} />
            </div>
            {isActive && (
                <div className="dropdown-content absolute top-[110%] p-[10px]  left-0 bg-[#f0f6f6] font-bold text-[#333] w-[100%] border-[1px] border-[#e5e5e5] rounded-[10px] cursor-pointer">
                    {option.map((option) => (
                <div onClick={(e) => {
                    setSelected (option1)
                    setIsActive(false)
                }
                    
                    } className="dropdown-item p-[10px] hover:bg-[#f1eeee] transition-all ">
                    {option1}
                </div>

                    ))}
                </div>
            )}
    </div> */}
    </div>
  )
}

export default DropDown