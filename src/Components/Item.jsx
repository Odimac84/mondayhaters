import WoWTooltip from "./WoWTooltip";

const Item = (props) => {
  return (
    <tr>
      <th><WoWTooltip id={props.id} /></th>
    </tr>
  )
}

export default Item;