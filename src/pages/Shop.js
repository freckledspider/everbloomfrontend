import { Form } from "react-router-dom";

const Shop = (props) => {

  return <div>
  <h2>View Products</h2>
  <Form action="/create" method="post">
  <input type="text" name="product" placeholder="product"/>
  <input type="text" name="image" placeholder="image" />
  <input type="text" name="price" placeholder="price"/>
  <input type="text" name="description" placeholder="description"/>
  <input type="text" name="card" placeholder="card"/>
  <button>Create Product</button>
  </Form>
  </div>
};

export default Shop;