// packages and libs
import { useDispatch, useSelector } from "react-redux";


// Components
import Button from "../Components/Button";
import ResultTable from "../Components/ResultTable";


// Actions
import { setSelectedRaid, setCurrentBosses } from "../redux/item/itemSlice";

// CONSTANTS
import RAIDS from "../redux/item/Constants";
import { useEffect, useState } from "react";


const ReservationPage = () => {
  const {selectedRaid, data, currentBosses, re} = useSelector(state => state.items);
  const [dropdownEnabled, setDropdownEnabled] = useState(false);
  

  const dispatch = useDispatch()
  

  useEffect(() => {
    const bosses = Array.from(new Set(data.map(item => {
      if(item.raid === selectedRaid){
        return item.droppedBy;
      }
        return "Random Mobs"
    })))
  
    dispatch(setCurrentBosses(bosses))
  }, [selectedRaid, data])


  // HANDLERS

  const dropDownHandler = () => {
    setDropdownEnabled(!dropdownEnabled);
  }

  const raidHandler = event => {
    dispatch(setSelectedRaid(event.target.value))
  }


  const dropDown =
    <div className="dropdown-container flex flex-col">
      { Object.values(RAIDS).map(raid => <button className="text-white hover:underline" value={raid} key={raid} onClick={raidHandler}>{raid}</button>) }
    </div>


  return (
    <>
      <main className="mt-[-10px] pt-[80px] bg-primary-dark h-[100vh] flex gap-[10%] px-[10%]">
        <div id="item-search-container" className="flex content-center flex-col border border-white h-[85%] w-[33%]">
          <ResultTable/>
        </div>
        <div id="item-reserve-container" className="w-[33%] h-[85%] border border-white me-5 p-3">
          <h4 className="text-white">Name - Rank</h4>
          <div className="text-white" id="100"><h3>100</h3></div>
          <div className="text-white" id="90"><h3>90</h3></div>
          <div className="text-white" id="80"><h3>80</h3></div>
          <div className="text-white" id="70"><h3>70</h3></div>
          <div className="text-white" id="65"><h3>65</h3></div>
          <div className="text-white" id="60"><h3>60</h3></div>
          <div className="text-white" id="55"><h3>55</h3></div>
          <div className="text-white" id="54"><h3>54</h3></div>
          <Button className="m-2" label='Reserve Gear'/>
          <Button className="m-2" btnHandler={dropDownHandler} label={selectedRaid}/>
          {!dropdownEnabled || dropDown}
        </div>
      </main>
    </>
  )
};

export default ReservationPage;
