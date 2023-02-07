import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";



const UserDetails = () => {


  return (
    <div className="h-screen">
      <h1 className='text-[35px] font-["Nunito_Sans"] font-[700] text-center p-6 mt-[30px] mb-[30px] text-[#000]'>
        Please enter your details
      </h1>

      <div className="form flex flex-col justify-center items-center space-y-10">
        <div className="relative">
          <input
            name="name"
            type="text"
            id="floating_name"
            className="block h-[48px] w-[450px] px-4 text-[15px]  text-gray-900 bg-transparent rounded-[8px] border-[2px] focus:border-[3px] border-slate-600 appearance-none  outline-none focus:border-green-900 peer"
            placeholder=" "
          />
          <label
            for="floating_name"
            className="absolute text-[15px] text-gray-500 dark:text-green-800 duration-300 transform -translate-y-4 scale-95 top-1 z-10 origin-[0] bg-[#E7EDED] dark:bg-green-900 px-2 peer-focus:px-2 peer-focus:text-green-900 peer-focus:dark:text-green-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-2.5 peer-placeholder-shown:top-5 peer-focus:top-1 peer-focus:scale-90 peer-focus:-translate-y-4 left-3"
          >
            Name
          </label>
        </div>
        <div className="relative">
          <input
            name="email"
            type="email"
            id="floating_email"
            className="block h-[48px] w-[450px] px-4 text-[15px]  text-gray-900 bg-transparent rounded-[8px] border-[2px] focus:border-[3px] border-slate-600 appearance-none  outline-none focus:border-green-900 peer"
            placeholder=" "
            
          />
          <label
            for="floating_email"
            className="absolute text-[15px] text-gray-500 dark:text-green-800 duration-300 transform -translate-y-4 scale-95 top-1 z-10 origin-[0] bg-[#E7EDED] dark:bg-green-900 px-2 peer-focus:px-2 peer-focus:text-green-900 peer-focus:dark:text-green-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-2.5 peer-placeholder-shown:top-5 peer-focus:top-1 peer-focus:scale-90 peer-focus:-translate-y-4 left-3"
          >
            Email
          </label>
        </div>

        <label for="states" className="sr-only">
          Location
        </label>
        <select
          name="location"
          id="states"
          className="bg-[#E7EDED] h-[48px] w-[450px] border-slate-600 text-gray-500 text-[17px] rounded-[8px] focus:ring-green-900 outline-none border-2 focus:border-green-900 focus:border-[3px] block p-2.5"
        >
          <option className="">Location</option>
          <option>Abia</option>
          <option>Adamawa</option>
          <option>Akwa Ibom</option>
          <option>Anambra</option>
          <option>Bauchi</option>
          <option>Bayelsa</option>
          <option>Benue</option>
          <option>Borno</option>
          <option>Cross River</option>
          <option>Delta</option>
          <option>Edo</option>
          <option>Ekiti</option>
          <option>Enugu</option>
          <option>Gombe</option>
          <option>Imo</option>
          <option>Jigawa</option>
          <option>Kaduna</option>
          <option>Kano</option>
          <option>Katsina</option>
          <option>Kebbi</option>
          <option>Kogi</option>
          <option>Kwara</option>
          <option>Lagos</option>
          <option>Nasarawa</option>
          <option>Niger</option>
          <option>Ogun</option>
          <option>Ondo</option>
          <option>Osun</option>
          <option>Oyo</option>
          <option>Plateau</option>
          <option>Rivers</option>
          <option>Sokoto</option>
          <option>Taraba</option>
          <option>Yobe</option>
          <option>Zamfara</option>
        </select>
      </div>

      <div className="btn flex justify-center mt-24">
        <Link to="/selectcandidate">
          <button className='text-white text-[23px] font-["Inter"] font-[500] mb-64 bg-[#0F4C4B] active:bg-[#167674] text-base px-[150px] py-[25px] text-center'>
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserDetails;

