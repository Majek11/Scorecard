import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from "./components/NavBar";
import Homepage from "./Pages/Homepage";
import SelectCandidate from "./Pages/SelectCandidate";
import SelectCandidates from "./Pages/SelectCandidates";
import General from "./Pages/General";
import UserDetails from "./Pages/UserDetails";



function App() {

  
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
      {/* <Homepage /> */}
      <Route path="/" element={ <Homepage />} />
      <Route path="/userdetails" element={ <UserDetails />} />
      <Route path="/selectcandidate" element={ <SelectCandidate /> } />
      <Route path="/selectcandidates" element={ <SelectCandidates />} />
      <Route path="/general" element={ <General />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
