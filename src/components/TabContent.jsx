import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import React from "react";
import DropDown from "./DropDown";
import { FiInfo } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { addPointsToCandidate } from "../store/scorecard.slice";

const TabContent = ({ data, next }) => {
  const { pathname } = useLocation();

  const selectedCandidates = useSelector((state) => state.selectedCandidates);
  const points = useSelector((state) => state.points);
  const [currentStep] = useState(pathname.slice(1));
  const questionSet = data;
  const dispatch = useDispatch();

  const handleSelection = (option, candidateName, question) => {
    dispatch(
      addPointsToCandidate({
        point: {
          currentStep,
          candidateName,
          question,
          answer: option.value,
          chosen: option.label,
        },
      })
    );

    console.log(points);
  };

  const calculatePoints = (candidateName) => {
    let filteredPoints = points[candidateName].filter(
      (point) => point.currentStep === currentStep
    );
    return filteredPoints.reduce((acc, current) => {
      return acc + current.answer;
    }, 0);
  };

  const getChosen = (candidateName, question, defaultOption) => {
    let pointsForCandidate = points[candidateName];
    let point = pointsForCandidate.find((point) => point.question === question);
    console.log({ chosen: point?.chosen });
    return point?.chosen || defaultOption;
  };

  return (
    <>
      <div className="info p-5 px-16 pt-10">
        <div className="general flex gap-3 items-center">
          <FiInfo size={20} />
          <p className='text-[25px] font-[600] font-["Nunito_Sans"]'>
            {questionSet.name}
          </p>
        </div>
        <hr className="h-[2px] mt-4 bg-gray-500 opacity-50" />
      </div>

      <div className="flex p-[50px] py-[30px]">
        <div className="question-block flex space-y-[50px] flex-col mt-[70px] ">
          {questionSet.questions
            .map((q) => q.text)
            .map((text, index) => (
              <div
                className="general flex gap-3 items-center py-[18px]"
                key={index}
              >
                <FiInfo size={18} />
                <p className='text-[18px] font-[600] font-["Inter"] p-2'>
                  {text}
              <hr className="h-[2px] mt-4 w-[1390px] absolute bg-gray-500 opacity-50" />
                </p>

              </div>
            ))}
        </div>
        {selectedCandidates.map((candidate, index) => (
          <div className="dropdown-group flex flex-col" key={index}>
            <h2 className='font-["Nunito_Sans"] font-[600] text-[18px] pl-[200px] text-[#092D2D]'>
              {candidate.name}
            </h2>
            {questionSet.questions.map((question, index) => (
              <div className="general flex py-8 justify-end" key={index}>
                <DropDown 
                  selected={getChosen(
                    candidate.name,
                    question.text,
                    question.options[0]
                  )}
                  setSelected={(option) =>
                    handleSelection(option, candidate.name, question.text)
                  }
                  options={question.options}
                  title={question.text}
                />
              </div>
            ))}
            <p className='font-["Nunito_Sans"] font-[600] text-[16px] text-center pl-[50%] ml-2 text-[#092D2D] py-5 px-6'>
              Candidate points: {calculatePoints(candidate.name) || 0 }
            </p>
          </div>
        ))}
      </div>

      <div className="btn flex justify-center mb-20">
        <Link to={`/candidate/${next}`}>
          <button className='text-white text-[23px] font-["Inter"] font-[600] bg-[#0F4C4B] active:bg-[#167674] text-base px-[120px] py-[25px] text-center'>
            Next
          </button>
        </Link>
      </div>
    </>
  );
};

export default TabContent;
