import { Link } from "react-router-dom";
import inventory from "../inventory";

const Index = (props) => {
  return <div className="index">
    <h2>Best Sellers</h2>
    <Link to={`/inventory/${inventory[2].id}`}><h2>{inventory[2].product}</h2></Link><br/>
  <img src={inventory[2].image} alt={inventory[2].description} width="200" /><br/>
  <Link to={`/inventory/${inventory[5].id}`}><h2>{inventory[5].product}</h2></Link><br/>
  <img src={inventory[5].image} alt={inventory[5].description} width="200" />
  </div>
};

export default Index;