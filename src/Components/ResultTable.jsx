import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Item from "./Item";


const ResultTable = () => {
  const data = useSelector((state) => state.items.data)
  const selectedRaid = useSelector((state) => state.items.selectedRaid)
  
  
  const [searchParams, setSearchParams] = useState('');
  const [itemComponents, setItemComponents] = useState([]);


  const searchHandler = (event) => {
    setSearchParams(event.target.value)
  }


  useEffect(() => {

    // {
      // "id": 16795,
      // "name": "Arcanist Crown",
      // "isLootable": true,
      // "droppedBy": "Garr",
      // "quality": "Epic",
      // "raid": "Molten Core",
      // "createdAt":"2023-10-04T10:27:02.778Z","updatedAt":"2023-10-04T10:27:02.778Z"}
      const timer = setTimeout(() => {
        if(searchParams === ''){
          return setItemComponents(data.filter(item => item.raid === selectedRaid).map(filteredItem => <Item id={filteredItem.id} key={filteredItem.id} />))
        } else if(searchParams[0] === '@' && searchParams.slice(1)){
          setItemComponents(data.filter(item => item.droppedBy.toLowerCase().includes(searchParams.slice(1).toLowerCase())).map(filteredItem => <Item id={filteredItem.id} key={filteredItem.id} />))
        } else {
          setItemComponents(data.filter(item => item.raid === selectedRaid && item.name.toLowerCase().includes(searchParams.toLowerCase())).map(filteredItem => <Item id={filteredItem.id} key={filteredItem.id} />))
        }
      }, [300])
      
      return () => {
        window.clearTimeout(timer)
      }

  }, [searchParams, data, selectedRaid])

  
  return (
    <div className="flex flex-col overflow-scroll h-100">
      <input onChange={searchHandler} className="w-9/12 self-center" id="search-bar" type="text"/>
        {itemComponents}
    </div>
  )
};

export default ResultTable