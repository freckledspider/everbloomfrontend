import Post from "../components/Post";
import {useLoaderData} from "react-router-dom"

const Cart = (props) => {
  const todos = useLoaderData()
  return <>
  {todos.map((post) => <Post post={post} key={post.id} />)}
  </>;
};

export default Cart;