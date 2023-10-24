import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Item from "./Item";


const ResultTable = () => {
  const data = useSelector((state) => state.items.data)
  const selectedRaid = useSelector((state) => state.items.selectedRaid)
  
  const [searchParams, setSearchParams] = useState('');
  const [itemComponents, setItemComponents] = useState([]);

  console.log(data)


  const searchHandler = (event) => {
    setSearchParams(event.target.value)
  }

  useEffect(() => {
    if(searchParams === ''){
      return setItemComponents(data.filter(item => item.raid === selectedRaid).map(filteredItem => <Item id={filteredItem.id} key={filteredItem.id} />))
    }
    setItemComponents(data.filter(item => item.raid === selectedRaid && item.name.toLowerCase().includes(searchParams.toLowerCase())).map(filteredItem => <Item id={filteredItem.id} key={filteredItem.id} />))
  }, [searchParams, data, selectedRaid])

  
  return (
    <div className="flex flex-col overflow-scroll h-100">
      <input onChange={searchHandler} className="w-9/12 self-center" id="search-bar" type="text"/>
        {itemComponents}
    </div>
  )
};

export default ResultTable