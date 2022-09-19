import React from "react";

const CandScoreCard = () => {
  return (
    <div>
      <h1 className='text-[35px] font-[700] p-4 mt-8 text-[#0F4C4B] font-["Inter"] text-center uppercase'>
        Candidate Scorecard
      </h1>

      <p className='text-center text-[16px] font-[400] font-["Nunito_Sans"]'>
      You will be scoring your selected candidates in 4 areas namely: General, Knowledge & Political History, Global & Business <br /> Exposure and Values. You can move forward after scoring your candidate(s) using the “Next” button or the section tabs below.
      </p>
    </div>
  );
};

export default CandScoreCard;
