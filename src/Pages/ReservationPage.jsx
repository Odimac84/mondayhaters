import { useDispatch, useSelector } from "react-redux";
import Button from "../Components/Button";
import ResultTable from "../Components/ResultTable";

// Actions
import { setSelectedRaid } from "../redux/item/itemSlice";

// CONSTANTS
import RAIDS from "../redux/item/Constants";
import { useState } from "react";


const ReservationPage = () => {
  const selectedRaid = useSelector(state => state.items.selectedRaid)
  const [dropdownEnabled, setDropdownEnabled] = useState(false);

  const dispatch = useDispatch()

  // HANDLERS

  const dropDownHandler = () => {
    setDropdownEnabled(!dropdownEnabled);
  }

  const raidHandler = event => {
    dispatch(setSelectedRaid(event.target.value))
  }


  const dropDown =
    // <div className="dropdown-container text-white flex flex-col border-2 border-black">
    //   { Object.values(RAIDS).map(raid => <button value={raid} key={raid} onClick={raidHandler}>{raid}</button>) }
    // </div>

    <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
        <li>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
        </li>
        <li>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
        </li>
        <li>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
        </li>
        <li>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
        </li>
      </ul>
    </div>  

  return (
    <>
      <main className="mt-[-10px] pt-[80px] bg-primary-dark h-[100vh] flex gap-[10%]">
        <div id="item-search-container" className="flex content-center flex-col border border-white w-[25%]">
          <ResultTable/>
        </div>
        <div id="item-reserve-container" className="w-[55%] border border-white me-5">
          <h4 className="text-white">Name - Rank</h4>
          <div>
            <div className="text-white" id="100"><h3>100</h3></div>
            <div className="text-white" id="90"><h3>90</h3></div>
            <div className="text-white" id="80"><h3>80</h3></div>
            <div className="text-white" id="70"><h3>70</h3></div>
            <div className="text-white" id="65"><h3>65</h3></div>
            <div className="text-white" id="60"><h3>60</h3></div>
            <div className="text-white" id="55"><h3>55</h3></div>
            <div className="text-white" id="54"><h3>54</h3></div>
          </div>
          <Button label='Reserve Gear'/>
          <Button btnHandler={dropDownHandler} label={selectedRaid}/>
          <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button 
          </button>
          {!dropdownEnabled || dropDown}
        </div>
      </main>
    </>
  )
};

export default ReservationPage;
