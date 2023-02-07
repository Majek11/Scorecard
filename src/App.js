import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from "./components/NavBar";
import Homepage from "./Pages/Homepage";
import SelectCandidate from "./Pages/SelectCandidate";
import SelectCandidates from "./Pages/SelectCandidates";
import UserDetails from "./Pages/UserDetails";
import Summary from "./Pages/Summary"
import StepLayout from "./layout/StepLayout";
import { categories } from "./utils/candidate";
import TabContent from "./components/TabContent";
import Share from './Pages/Share';



function App() {
  const getData = (step) => {
    return categories.find(category => category.name.toLowerCase().includes(step))
  }
  
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={ <Homepage />} />
      <Route path="/userdetails" element={ <UserDetails />} />
      <Route path="/selectcandidate" element={ <SelectCandidate /> } />
      <Route path="/selectcandidates" element={ <SelectCandidates />} />
      <Route path="/candidate" element={ <StepLayout /> }>
        <Route path="/candidate/general" element={ <TabContent data={getData('general')} next="manifesto" /> } />
        <Route path="/candidate/manifesto" element={ <TabContent data={getData('manifesto')} next="knowledge" /> } />
        <Route path="/candidate/knowledge" element={ <TabContent data={getData('knowledge')} next="global" /> } />
        <Route path="/candidate/global" element={ <TabContent data={getData('global')} next="values" /> } />
        <Route path="/candidate/values" element={ <TabContent data={getData('values')} next="summary" /> } />
        <Route path="/candidate/summary" element={ <Summary /> } />
      </Route>
        <Route path="/share" element={ <Share /> } />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
