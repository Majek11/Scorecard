import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { candidates } from "../utils/candidate";
import CandidateCard from "../components/CandidateCard";
import { useSelector, useDispatch } from "react-redux";
import { addSelectedCandidate, removeSelectedCandidate } from "../store/scorecard.slice";
// import { useFormAction } from 'react-router-dom'


 const SelectCandidate = () => {
  const selectedCandidates = useSelector(state => state.selectedCandidates)
  const dispatch = useDispatch()
  console.log({selectedCandidates})

    const  handleOptionClick = (option, selected) => { 
      if (selected) {
         dispatch(addSelectedCandidate({candidate: option}))
      } else {
       dispatch(removeSelectedCandidate({candidate: option.name}))
      }
    }
    
  return (
    <div>
      <h1 className='text-[35px] font-[700] p-4 mt-[75px] text-[#0F4C4B] font-["Inter"] text-center uppercase'>
        Select Candidates
      </h1>

      <p className='text-center text-[16px] font-[400] font-["Nunito_Sans"]'>
        Kindly select the candidate(s) you wish to score. You can select up to 3
        candidates. If you wish to change a selected candidate, <br /> click on
        the selected candidate to deselect it. Once you are satisfied with your
        selection, click “Next”.
      </p>

      <p className='text-[#87A5A5] text-[15px] font-[600] font-["Nunito_Sans"] text-center pt-10 uppercase'>
        {selectedCandidates.length}/3 Selected
      </p>
      {/* IMAGES SECTION */}
      <div className="grid grid-cols-4 gap-y-8">
        {
          candidates.map((candidate,index) => (
            <CandidateCard data={candidate} key={index} handleOptionClick={handleOptionClick} disabled={selectedCandidates.length === 3} />
          ) )
        }
      </div>
      <Link to="/selectcandidates">
        <div className="btn flex justify-center p-10 pt-[80px]">
          <button disabled={selectedCandidates.length < 3}
            className='text-white text-[20px] font-["Inter"] disabled:bg-[#87A5A5] bg-[#167674] text-base px-[70px] py-[20px] text-center'
          >
            Next
          </button>
        </div>
      </Link>
    </div>
  );
};

export default SelectCandidate;
