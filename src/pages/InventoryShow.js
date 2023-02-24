import inventory from "../inventory"
import { useParams } from "react-router-dom"

const InventoryShow = (props, params) => {
    const {id} = useParams()
    return ( <div>
    <h2>{inventory[id].product}</h2>
    <img src={inventory[id].image} alt={inventory[id].description} width="400" />
    <h3>{inventory[id].price}</h3>
    {inventory[id].description}
    </div>
    )}

export default InventoryShow