import React from "react";
import { Link } from "react-router-dom";
import Chart from "../components/Chart";
import Score from "../components/Score";
// import CandScoreCard from '../components/CandScoreCard'
// import Tabs from '../components/Tabs'

const Summary = () => {
  return (
    <div>
      <div className="flex items-center">
        <Chart />
        <Score />
      </div>
      <Link to="/share">
        <div className="btn flex justify-center p-[70px] mb-10">
          <button className='text-white text-[21px] font-["Inter"] bg-[#0F4C4B] hover:bg-[#167674] text-base px-[60px] py-[25px] text-center'>
            Share Result
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Summary;
