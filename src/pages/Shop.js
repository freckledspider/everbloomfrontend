import { Form } from "react-router-dom";
import { Link } from "react-router-dom";
import inventory from "../inventory";

const Shop = (props) => {

    return <div className="shop">
    <table>
    <h2>Arrangements</h2>
    {inventory.map((flowers) => {
    const { product, price, image, description, id } = flowers;
    return ( <div className="shopCards">
    <Link to={`/inventory/${id}`}><h3>{product}</h3></Link>
    <Link to={`/inventory/${id}`}><img src={image} alt={description} width="200" /></Link><h3>${price}</h3>
<Form action="/create" method="post">
<input className="displayNone" type="text" name="product" value={product}/>
<input className="displayNone" type="text" name="image" value={image} />
<input  className="displayNone" type="text" name="price" value={price}/>
<input className="displayNone" type="text" name="description" value={description}/>
<input className="displayNone" type="text" name="card" value="No card message"/>
<button>Add to Cart</button>
</Form>
            </div>
            );
        })}
  </table></div>
};

export default Shop;