import React from "react";
import { IoIosCheckmarkCircle } from 'react-icons/io'
import { useState } from "react";

const CandidateCard = ({data, handleOptionClick, disabled }) => {
    const [selected, setSelected] = useState(false);

    function handleSelect () {
        if (!disabled) {
            setSelected(!selected)
            handleOptionClick(data, !selected)
        }
    }

  return (
<div onClick={handleSelect}
      className={`candidate container overflow-hidden bg-white w-[290px] h-[105px] flex ml-10 mt-12 cursor-pointer ${selected ? 'border-4 border-green-600 group':''}`}>
<div className="card">
  <img
    className="w-[105px] h-[105px] object-cover"
    src={data.image}
    alt="Tinubu"
  />
</div>
<div className="card2">
  <p className="text-[16px] text-[#0F4C4B] font-[500] pl-8 pt-8">
    {data.name} <br />
    <span className="uppercase font-[700] pt-2">{data?.party}</span>
  </p>
  {selected && <IoIosCheckmarkCircle size={30} className="relative left-[140px] -top-4 text-[#0F4C4B]" />}
</div>
</div>

  );
};

export default CandidateCard;
