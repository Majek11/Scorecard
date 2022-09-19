import React from "react";
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div>
      <header className="space-y-4">
        <h1 className='text-center text-[35px] font-[700] uppercase text-[#0F4C4B] p-4 mt-8 font-["Inter"]'>
          2023 Nigerian Presidential <br /> Candidate Scoreboard{" "}
        </h1>

        <p className="flex gap-2 pl-[17%] justify-start text-[16px] text-[#0F4C4B] font-[400]">
          <div className='num font-["Nunito_sans"]'>1.</div>
          <div className='info font-["Nunito_sans"]'>
            Nigeria is facing unprecedented socio-political challenges. Decades
            of weakening leadership, poor governance and endemic <br />{" "}
            corruption have worsened the standard of living of Nigerians.{" "}
          </div>
        </p>
        <p className="flex gap-2 pl-[17%] justify-start text-[16px] text-[#0F4C4B] font-[400]">
          <div className='num font-["Nunito_sans"]'>2.</div>
          <div className='info font-["Nunito_sans"]'>
            Poverty, unemployment, corruption, insecurity & terrorism and
            failing educational and health systems abound. It will take <br />{" "}
            different kinds of leaders to set us back on the right course.
          </div>
        </p>
        <p className="flex gap-2 pl-[17%] justify-start text-[16px] text-[#0F4C4B] font-[400]">
          <div className='num font-["Nunito_sans"]'>3.</div>
          <div className='info font-["Nunito_sans"]'>
            We can do this through our votes, informed by a deliberate and
            thoughtful assessment across all candidates.
          </div>
        </p>
        <p className="flex gap-2 pl-[17%] justify-start text-[16px] text-[#0F4C4B] font-[400]">
          <div className='num font-["Nunito_sans"]'>4.</div>
          <div className='info font-["Nunito_sans"]'>
            This candidates scoring tool provides a strategic, consistent and
            replicable approach to assessing all candidates.
          </div>
        </p>

        <p className='font-["Nunito_sans"] font-[700] text-[16px] pr-[5%] pb-4 text-center pt-4 text-[#0F4C4B]'>
          You can complete this candidate scorecard online via your smart
          phones, iPads, Tablets, laptops or computers.
        </p>

        <p className="flex gap-2 pl-[17%] justify-start text-[16px] text-[#0F4C4B] font-[400]">
          <div className='num font-["Nunito_sans"]'>1.</div>
          <div className='info font-["Nunito_sans"]'>
          Gather information from credible sources on the political candidates. Information should be relevant to allow candidate evaluation <br /> across the four major scoring areas - General, Knowledge & Political History, Global & Business Exposure and Values. 
          </div>
        </p>
        <p className="flex gap-2 pl-[17%] justify-start text-[16px] text-[#0F4C4B] font-[400]">
          <div className='num font-["Nunito_sans"]'>2.</div>
          <div className='info font-["Nunito_sans"]'>
          Assess political candidates in these four areas. Rely on credible information and be objective in your assessment. Avoid sentiments and <br /> unverifiable anecdotes. Click on  (i) for more information to guide you. 
          </div>
        </p>
        <p className="flex gap-2 pl-[17%] justify-start text-[16px] text-[#0F4C4B] font-[400]">
          <div className='num font-["Nunito_sans"]'>3.</div>
          <div className='info font-["Nunito_sans"]'>
          Assign candidates scores in each area. If you choose to not score a candidate in one area, do so consistently for all candidates. For <br /> example, if you exclude "Age" for one candidate, you MUST exclude it for other candidates. 
          </div>
        </p>
        <p className="flex gap-2 pl-[17%] justify-start text-[16px] text-[#0F4C4B] font-[400]">
          <div className='num font-["Nunito_sans"]'>4.</div>
          <div className='info font-["Nunito_sans"]'>
          Tally scores for each candidate. If you use the online tool, it will automatically tally the scores for you. Please submit completed forms <br /> online via your smart phones, iPads, Tablets, laptops or computers
          </div>
        </p>
        <p className="flex gap-2 pl-[17%] justify-start text-[16px] text-[#0F4C4B] font-[400]">
          <div className='num font-["Nunito_sans"]'>5.</div>
          <div className='info font-["Nunito_sans"]'>
          Compare scores across candidates. The candidate with the highest total score is likely your preferred candidate
          </div>
        </p>
    <Link to='/userdetails'>
    <div className="btn flex justify-center p-10">
        <button className='text-white text-[18px] font-["Inter"] bg-[#0F4C4B] hover:bg-[#167674] text-base px-10 py-4 text-center'>Take a poll</button>
    </div>
    </Link>
      </header>
    </div>
  );
};

export default Homepage;
