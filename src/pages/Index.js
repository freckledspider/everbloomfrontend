import Post from "../components/Post";
import {useLoaderData} from "react-router-dom"
import { Form } from "react-router-dom";

const Index = (props) => {
  const todos = useLoaderData()

  return <>
  <div>
  <h2>Create a Product</h2>
  <Form action="/create" method="post">
      <input type="text" name="product" placeholder="product"/>
      <input type="text" name="image" placeholder="image" />
      <input type="text" name="price" placeholder="price"/>
      <input type="text" name="description" placeholder="description"/>
      <input type="text" name="card" placeholder="card"/>
      <button>Create Product</button>
  </Form>
  </div>
  {todos.map((post) => <Post post={post} key={post.id} />)}
  </>;
};

export default Index;