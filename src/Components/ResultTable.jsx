import Item from "./Item";

const db = [
  {
    id: 16796,
    name: 'Arcanist Leggings',
    instance: 'Molten Core',
    boss: 'Magmadar'
  },
  {
    id: 16801,
    name: 'Arcanist Gloves',
    instance: 'Molten Core',
    boss: 'Shazzrah'
  }
]

const items = db.map(item => <Item id={item.id}/>)

const ResultTable = () => {
  return (
    <div className="">
      {items}
    </div>
  )
};

export default ResultTable