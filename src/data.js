export const fetchData = async () => {
  const data = await fetch('http://localhost:9000/items')
  const items = await data.json()
  console.log(items)
  return items;
}