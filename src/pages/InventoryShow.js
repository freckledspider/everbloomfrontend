import inventory from "../inventory"

const InventoryShow = (props) => {
    return <div>
    <h2>{inventory[0].product}</h2>
    <img src={inventory[0].image} alt="" width="400" /><br/>
    {inventory[0].price}<br/>
    {inventory[0].description}
    </div>
  };
  
  export default InventoryShow;