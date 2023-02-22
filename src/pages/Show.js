import { Link, useLoaderData, Form } from "react-router-dom";

// destructuring the props needed to get our post, including router prop match
const Show = () => {
  const post = useLoaderData();

  return (
    <div>
      <h1>{post.product}</h1>
      <h2>{post.price}</h2>
      <div>
        <h2>Edit Product</h2>
        <Form action={`/update/${post.id}`} method="post">
          <input
            type="text"
            name="product"
            placeholder="product name"
            defaultValue={post.product}
          />
          <input
            type="text"
            name="price"
            placeholder="price"
            defaultValue={post.price}
          />
          <button>Update Product</button>
        </Form>
        <Form action={`/delete/${post.id}`} method="post">
          <button>Delete Product</button>
        </Form>
      </div>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default Show;