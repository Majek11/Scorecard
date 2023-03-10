import React from "react";
import { Link } from "react-router-dom";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Adebayo from "../assets/images/Adebayo-2.jpg";
import Tinubu from "../assets/images/Bola-Tinubu-2.webp";
import Atiku from "../assets/images/Atiku.webp";
import Dumebi from "../assets/images/Dumebi-Kachikwu.webp";
import Hamza from "../assets/images/Al-Mustapha.webp";
import Kola from "../assets/images/Kola-ABiola.jpg";
import Malik from "../assets/images/MalikYYP.jpg";
import Okudili from "../assets/images/MaziNRM.jpg";
import Sowore from "../assets/images/Sowore.jpg";
import Peter from "../assets/images/peterobi.jpg";
import Umeadi from "../assets/images/Umeadi.jpeg";
import Kwakwanso from "../assets/images/Kwakwanso.jpg";
import { useSelector } from "react-redux";
import { candidates } from "../utils/candidate";

const SelectCandidates = () => {
  const selectedCandidates = useSelector((state) => state.selectedCandidates);

  return (
    <div>
      <h1 className='text-[35px] font-[700] text-[#0F4C4B] font-["Inter"] p-4 mt-8 text-center uppercase'>
        Select Candidates
      </h1>

      <p className='text-center text-[16px] font-[400] font-["Nunito_Sans"]'>
        Kindly select the candidate(s) you wish to score. You can select up to 3
        candidates. If you wish to change a selected candidate, <br /> click on
        the selected candidate to deselect it. Once you are satisfied with your
        selection, click “Next”.
      </p>

      <p className='text-[#0F4C4B] text-[15px] font-[600] font-["Nunito_Sans"] text-center pt-10 uppercase mb-6'>
        3/3 Selected
      </p>
      {/* IMAGES SECTION */}
      <div className="grid grid-cols-4 gap-y-8 relative">
        <div className="bg-[#0F4C4B] absolute w-full h-[650px] top-0 right-0 object-cover opacity-90 p-[158px]">
          <p className='text-center text-white font-["Inter"] text-[18px] font-[700]'>
            You have these selected candidates. Proceed to score them.
          </p>
          <div className="selectedcandidate flex flex-cols justify-center">
            {selectedCandidates.map((candidate, index) => (
              <div key={index} className="candidate container bg-white w-[290px] h-[105px] flex ml-10 mt-12">
                <div className="card">
                  <img
                    className="w-[105px] h-[105px] object-cover"
                    src={candidate.image}
                    alt={candidate.name}
                  />
                </div>
                <div className="card2">
                  <p className="text-[16px] text-[#0F4C4B] font-[500] pl-8 pt-8">
                    {candidate.name}
                    <br />{" "}
                    <span className="uppercase font-[700] pt-2">{candidate?.party}</span>
                  </p>
                  <IoIosCheckmarkCircle
                    size={30}
                    className="relative left-[150px] -top-2 text-[#0F4C4B]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="candidate container bg-white w-[290px] h-[105px] flex ml-10 mt-12 active:border-[#000] cursor-pointer">
          <div className="card">
            <img
              className="w-[105px] h-[105px] object-cover"
              src={Adebayo}
              alt="Adebayo"
            />
          </div>
          <div className="card2">
            <p className="text-[16px] text-[#0F4C4B] font-[500] pl-4 pt-4">
              Adewole Adebayo <br />{" "}
              <span className="uppercase font-[700] pt-2">Sdp</span>
            </p>
          </div>
        </div>
        <div className="candidate container bg-white w-[290px] h-[105px] flex ml-10 mt-12">
          <div className="card">
            <img
              className="w-[105px] h-[105px] object-cover"
              src={Tinubu}
              alt="Tinubu"
            />
          </div>
          <div className="card2">
            <p className="text-[11px] text-[#0F4C4B] font-[500] pl-4 pt-4">
              Bola Tinubu <br />{" "}
              <span className="uppercase font-[7005 pt-2">apc</span>
            </p>
          </div>
        </div>
        <div className="candidate container bg-white w-[290px] h-[105px] flex ml-10 mt-12">
          <div className="card">
            <img
              className="w-[105px] h-[105px] object-cover"
              src={Atiku}
              alt="Atiku"
            />
          </div>
          <div className="card2">
            <p className="text-[16px] text-[#0F4C4B] font-[500] pl-4 pt-4">
              Atiku Abubakar
              <br /> <span className="uppercase font-[700] pt-2">pdp</span>
            </p>
          </div>
        </div>
        <div className="candidate container bg-white w-[290px] h-[105px] flex ml-10 mt-12">
          <div className="card">
            <img
              className="w-[105px] h-[105px] object-cover"
              src={Dumebi}
              alt="Dumebi"
            />
          </div>
          <div className="card2">
            <p className="text-[16px] text-[#0F4C4B] font-[500] pl-4 pt-4">
              Dumebi Kachikwu <br />{" "}
              <span className="uppercase font-[700] pt-2">adc</span>
            </p>
          </div>
        </div>
        <div className="candidate container bg-white w-[290px] h-[105px] flex ml-10 mt-12">
          <div className="card">
            <img
              className="w-[105px] h-[105px] object-cover"
              src={Hamza}
              alt="Hamza"
            />
          </div>
          <div className="card2">
            <p className="text-[16px] text-[#0F4C4B] font-[500] pl-4 pt-4">
              Hamza Al-Mustapha
              <br /> <span className="uppercase font-[700] pt-2">aa</span>
            </p>
          </div>
        </div>
        <div className="candidate container bg-white w-[290px] h-[105px] flex ml-10 mt-12">
          <div className="card">
            <img
              className="w-[105px] h-[105px] object-cover"
              src={Kola}
              alt="Kola"
            />
          </div>
          <div className="card2">
            <p className="text-[16px] text-[#0F4C4B] font-[500] pl-4 pt-4">
              Kola Abiola <br />{" "}
              <span className="uppercase font-[700] pt-2">prp</span>
            </p>
          </div>
        </div>
        <div className="candidate container bg-white w-[290px] h-[105px] flex ml-10 mt-12">
          <div className="card">
            <img
              className="w-[105px] h-[105px] object-cover"
              src={Malik}
              alt="Malik"
            />
          </div>
          <div className="card2">
            <p className="text-[16px] text-[#0F4C4B] font-[500] pl-4 pt-4">
              Malik Ado-Ibrahim <br />{" "}
              <span className="uppercase font-[700] pt-2">ypp</span>
            </p>
          </div>
        </div>
        <div className="candidate container bg-white w-[290px] h-[105px] flex ml-10 mt-12">
          <div className="card">
            <img
              className="w-[105px] h-[105px] object-cover"
              src={Okudili}
              alt="Okudili"
            />
          </div>
          <div className="card2">
            <p className="text-[16px] text-[#0F4C4B] font-[500] pl-4 pt-4">
              Okudili Ayanjike <br />{" "}
              <span className="uppercase font-[700] pt-2">nrm</span>
            </p>
          </div>
        </div>
        <div className="candidate container bg-white w-[290px] h-[105px] flex ml-10 mt-12">
          <div className="card">
            <img
              className="w-[105px] h-[105px] object-cover"
              src={Sowore}
              alt="Sowore"
            />
          </div>
          <div className="card2">
            <p className="text-[16px] text-[#0F4C4B] font-[500] pl-4 pt-4">
              Omoyele Sowore
              <br /> <span className="uppercase font-[700] pt-2">aac</span>
            </p>
          </div>
        </div>
        <div className="candidate container bg-white w-[290px] h-[105px] flex ml-10 mt-12">
          <div className="card">
            <img
              className="w-[105px] h-[105px] object-cover"
              src={Peter}
              alt="Peter"
            />
          </div>
          <div className="card2">
            <p className="text-[16px] text-[#0F4C4B] font-[500] pl-4 pt-4">
              Peter Obi
              <br /> <span className="uppercase font-[700] pt-2">lp</span>
            </p>
          </div>
        </div>
        <div className="candidate container bg-white w-[290px] h-[105px] flex ml-10 mt-12">
          <div className="card">
            <img
              className="w-[105px] h-[105px] object-cover"
              src={Umeadi}
              alt="Umeadi"
            />
          </div>
          <div className="card2">
            <p className="text-[16px] text-[#0F4C4B] font-[500] pl-4 pt-4">
              Peter Umeadi
              <br /> <span className="uppercase font-[700] pt-2">apga</span>
            </p>
          </div>
        </div>
        <div className="candidate container bg-white w-[290px] h-[105px] flex ml-10 mt-12">
          <div className="card">
            <img
              className="w-[105px] h-[105px] object-cover"
              src={Kwakwanso}
              alt="Kwakwanso"
            />
          </div>
          <div className="card2">
            <p className="text-[16px] text-[#0F4C4B] font-[500] pl-4 pt-4">
              Rabiu Kwakwanso
              <br /> <span className="uppercase font-[700] pt-2">nnpp</span>
            </p>
          </div>
        </div>
      </div>
      <Link to="/candidate/general">
        <div className="btn flex justify-center p-14 mt-40 mb-44">
          <button className='text-white text-[22px] font-["Inter"] font-[400] bg-[#0F4C4B] active:bg-[#167674] text-base px-[80px] py-[25px] text-center'>
            Score Candidate
          </button>
        </div>
      </Link>
    </div>
  );
};

export default SelectCandidates;
