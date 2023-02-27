import ProductCard from "../components/ProductCard";
import {useLoaderData} from "react-router-dom"

const Cart = (props) => {
  const products = useLoaderData()
  return <div className="cart">
  <table>
  <h2>Shopping Cart</h2>
  {products.map((product) => <ProductCard post={product} key={product.id} />)}
  </table>
  </div>
};

export default Cart;