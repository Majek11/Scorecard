import React from 'react'
import { useState } from 'react'
import CandScoreCard from '../components/CandScoreCard'
import TabContent from '../components/TabContent'
import DropDown from '../components/DropDown'


const General = () => {

  const [selected, setSelected] = useState(null);
  // const [selec, setSelec] = useState("Level");
  const [select, setSelect] = useState("Description");
  // const [selection, setSelection] = useState("Descript");
  return (
    <div>
        <CandScoreCard />
        <TabContent />
        <div className="dropdown flex">
        <DropDown selected={selected} setSelected={setSelected} options={['React', 'Vue', 'Angular']} title={'Framework'} />
        {/* <DropDown selected={select} setSelected={setSelect} /> */}
        {/* <DropDown selected={select} setSelected={setSelect} /> */}
        </div>
  
    </div>
  )
}

export default General