import Button from "../Components/Button";
import ResultTable from "../Components/ResultTable";


const ReservationPage = () => {

  const searchHandler = (e) => {
    console.log('Searching for id ' + e.target.value)
  };

  return (
    <>
      <main className="mt-[-10px] pt-[80px] bg-primary-dark h-[100vh] flex gap-[10%]">
        <div id="item-search-container" className="flex flex-wrap content-center flex-col border border-white w-[25%]">
          <input id="search-bar" type="text" onChange={searchHandler} />
          <div>
            <ResultTable/>
          </div>
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
          <Button label='Molten Core' />
        </div>
      </main>
    </>
  )
};

export default ReservationPage;
