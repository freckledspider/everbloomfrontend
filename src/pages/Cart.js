import ProductCard from "../components/ProductCard";
import {useLoaderData} from "react-router-dom"

const Cart = (props) => {
  const products = useLoaderData()
  return <>
  {products.map((product) => <ProductCard post={product} key={product.id} />)}
  </>;
};

export default Cart;