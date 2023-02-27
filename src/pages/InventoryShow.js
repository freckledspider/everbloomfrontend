import inventory from "../inventory"
import { useParams } from "react-router-dom"
import { Form } from "react-router-dom"

const InventoryShow = (props, params) => {
    const {id} = useParams()
    return ( <div className="inventoryShow">
    <table>
    <tr>
    <td>
    <img src={inventory[id].image} alt={inventory[id].description} width="500" /></td>
    <td>
    <h2>{inventory[id].product}</h2>
    <h3>${inventory[id].price}</h3>
    <hr></hr><br/>
    {inventory[id].description}<br/>
    <Form action="/create" method="post">
<input className="displayNone" type="text" name="product" value={inventory[id].product}/>
<input className="displayNone" type="text" name="image" value={inventory[id].image} />
<input className="displayNone" type="text" name="price" value={inventory[id].price}/>
<input className="displayNone" type="text" name="description" value={inventory[id].description}/><br/><br/>
Enter optional card message: <input type="text" name="card" value="No card message"/><br/><br/>
<button>Add to Cart</button>
</Form></td>
    </tr>
    </table>
    </div>
    )}

export default InventoryShow