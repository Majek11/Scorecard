import React from 'react'
import { Link } from 'react-router-dom'
import Adebayo from '../assets/images/Adebayo-2.jpg'
import Tinubu from '../assets/images/Bola-Tinubu-2.webp'
import Atiku from '../assets/images/Atiku.webp'
import Dumebi from '../assets/images/Dumebi-Kachikwu.webp'
import Hamza from '../assets/images/Al-Mustapha.webp'
import Kola from '../assets/images/Kola-ABiola.jpg'
import Malik from '../assets/images/MalikYYP.jpg'
import Okudili from '../assets/images/MaziNRM.jpg'
import Sowore from '../assets/images/Sowore.jpg'
import Peter from '../assets/images/peterobi.jpg'
import Umeadi from '../assets/images/Umeadi.jpeg'
import Kwakwanso from '../assets/images/Kwakwanso.jpg'

const SelectCandidate = () => {
  return (
    <div>
        <h1 className='text-[35px] font-[700] p-4 mt-8 text-[#0F4C4B] font-["Inter"] text-center uppercase'>Select Candidates</h1>

        <p className='text-center text-[16px] font-[400] font-["Nunito_Sans"]'>Kindly select the candidate(s) you wish to score. You can select up to 3 candidates. If you wish to change a selected candidate, <br /> click on the selected candidate to deselect it. Once you are satisfied with your selection, click “Next”.</p>

        <p className='text-[#87A5A5] text-[15px] font-[600] font-["Nunito_Sans"] text-center pt-10 uppercase'>0/3 Selected</p>
        {/* IMAGES SECTION */}
        <div className="grid grid-cols-4 gap-y-8 ml-8">
        <div className="container bg-white w-[180px] h-[60px] flex ml-10 mt-12">
            <div className="card">
            <img className='w-[60px] h-[60px] object-cover' src={Adebayo} alt="Adebayo"/>    
            </div>
            <div className="card2">
            <p className='text-[11px] text-[#0F4C4B] font-[500] pl-4 pt-4'>Adewole Adebayo <br /> <span className='uppercase font-[700] pt-2'>Sdp</span></p>
            </div>
        </div>
        <div className="container bg-white w-[180px] h-[60px] flex ml-10 mt-12">
            <div className="card">
            <img className='w-[60px] h-[60px] object-cover' src={Tinubu} alt="Tinubu"/>    
            </div>
            <div className="card2">
            <p className='text-[11px] text-[#0F4C4B] font-[500] pl-4 pt-4'>Ahmed Tinubu <br /> <span className='uppercase font-[700] pt-2'>Apc</span></p>
            </div>
        </div>
        <div className="container bg-white w-[180px] h-[60px] flex ml-10 mt-12">
            <div className="card">
            <img className='w-[60px] h-[60px] object-cover' src={Atiku} alt="Atiku"/>    
            </div>
            <div className="card2">
            <p className='text-[11px] text-[#0F4C4B] font-[500] pl-4 pt-4'>Atiku Abubakar<br /> <span className='uppercase font-[700] pt-2'>pdp</span></p>
            </div>
        </div>
        <div className="container bg-white w-[180px] h-[60px] flex ml-10 mt-12">
            <div className="card">
            <img className='w-[60px] h-[60px] object-cover' src={Dumebi} alt="Dumebi"/>    
            </div>
            <div className="card2">
            <p className='text-[11px] text-[#0F4C4B] font-[500] pl-4 pt-4'>Dumebi Kachikwu <br /> <span className='uppercase font-[700] pt-2'>adc</span></p>
            </div>
        </div>
        <div className="container bg-white w-[180px] h-[60px] flex ml-10 mt-12">
            <div className="card">
            <img className='w-[60px] h-[60px] object-cover' src={Hamza} alt="Hamza"/>    
            </div>
            <div className="card2">
            <p className='text-[11px] text-[#0F4C4B] font-[500] pl-4 pt-4'>Hamza Al-Mustapha<br /> <span className='uppercase font-[700] pt-2'>aa</span></p>
            </div>
        </div>
        <div className="container bg-white w-[180px] h-[60px] flex ml-10 mt-12">
            <div className="card">
            <img className='w-[60px] h-[60px] object-cover' src={Kola} alt="Kola"/>    
            </div>
            <div className="card2">
            <p className='text-[11px] text-[#0F4C4B] font-[500] pl-4 pt-4'>Kola Abiola <br /> <span className='uppercase font-[700] pt-2'>prp</span></p>
            </div>
        </div>
        <div className="container bg-white w-[180px] h-[60px] flex ml-10 mt-12">
            <div className="card">
            <img className='w-[60px] h-[60px] object-cover' src={Malik} alt="Malik"/>    
            </div>
            <div className="card2">
            <p className='text-[11px] text-[#0F4C4B] font-[500] pl-4 pt-4'>Malik Ado-Ibrahim <br /> <span className='uppercase font-[700] pt-2'>ypp</span></p>
            </div>
        </div>
        <div className="container bg-white w-[180px] h-[60px] flex ml-10 mt-12">
            <div className="card">
            <img className='w-[60px] h-[60px] object-cover' src={Okudili} alt="Okudili"/>    
            </div>
            <div className="card2">
            <p className='text-[11px] text-[#0F4C4B] font-[500] pl-4 pt-4'>Okudili Ayanjike <br /> <span className='uppercase font-[700] pt-2'>nrm</span></p>
            </div>
        </div>
        <div className="container bg-white w-[180px] h-[60px] flex ml-10 mt-12">
            <div className="card">
            <img className='w-[60px] h-[60px] object-cover' src={Sowore} alt="Sowore"/>    
            </div>
            <div className="card2">
            <p className='text-[11px] text-[#0F4C4B] font-[500] pl-4 pt-4'>Omoyele Sowore<br /> <span className='uppercase font-[700] pt-2'>aac</span></p>
            </div>
        </div>
        <div className="container bg-white w-[180px] h-[60px] flex ml-10 mt-12">
            <div className="card">
            <img className='w-[60px] h-[60px] object-cover' src={Peter} alt="Peter"/>    
            </div>
            <div className="card2">
            <p className='text-[11px] text-[#0F4C4B] font-[500] pl-4 pt-4'>Peter Obi<br /> <span className='uppercase font-[700] pt-2'>lp</span></p>
            </div>
        </div>
        <div className="container bg-white w-[180px] h-[60px] flex ml-10 mt-12">
            <div className="card">
            <img className='w-[60px] h-[60px] object-cover' src={Umeadi} alt="Umeadi"/>    
            </div>
            <div className="card2">
            <p className='text-[11px] text-[#0F4C4B] font-[500] pl-4 pt-4'>Peter Umeadi<br /> <span className='uppercase font-[700] pt-2'>apga</span></p>
            </div>
        </div>
        <div className="container bg-white w-[180px] h-[60px] flex ml-10 mt-12">
            <div className="card">
            <img className='w-[60px] h-[60px] object-cover' src={Kwakwanso} alt="Kwakwanso"/>    
            </div>
            <div className="card2">
            <p className='text-[11px] text-[#0F4C4B] font-[500] pl-4 pt-4'>Rabiu Kwakwanso<br /> <span className='uppercase font-[700] pt-2'>nnpp</span></p>
            </div>
        </div>
        </div>
        <Link to='/selectcandidates'>
        <div className="btn flex justify-center p-10 pt-10">
        <button className='text-white text-[18px] font-["Inter"] bg-[#87A5A5] active:bg-[#167674] text-base px-10 py-4 text-center'>Next</button>
    </div>
        </Link>

    </div>
  )
}

export default SelectCandidate