import { Form } from "react-router-dom";
import inventory from "../inventory";

const Shop = (props) => {

    return <div>
    <h2>View Products</h2>
    {inventory.map((flowers) => {
    const { product, price, image, description } = flowers;
    return ( <div>
    <h2>{product}</h2>
    <img src={image} alt="" width="200" /><h3>{price}</h3>
<Form action="/create" method="post">
<input type="text" name="product" value={product}/>
<input type="text" name="image" value={image} />
<input type="text" name="price" value={price}/>
<input type="text" name="description" value={description}/>
<input type="text" name="card" value="No card message"/>
<button>Add to Cart</button>
</Form>
                </div>
                );
            })}
  </div>
};

export default Shop;