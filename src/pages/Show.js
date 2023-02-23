import { Link, useLoaderData, Form } from "react-router-dom";

// destructuring the props needed to get our post, including router prop match
const Show = () => {
  const product = useLoaderData();

  return (
    <div>
      <h1>{product.product}</h1>
      <h2>{product.price}</h2>
      <div>
        <h2>Edit Product</h2>
        <Form action={`/update/${product.id}`} method="post">
          <input
            type="text"
            name="product"
            placeholder="product name"
            defaultValue={product.product}
          />
          <input
            type="text"
            name="image"
            placeholder="image"
            defaultValue={product.image}
          />
            <input
            type="text"
            name="price"
            placeholder="price"
            defaultValue={product.price}
          />
            <input
            type="text"
            name="description"
            placeholder="description"
            defaultValue={product.description}
          />
            <input
            type="text"
            name="card"
            placeholder="card"
            defaultValue={product.card}
          />
          <button>Update Product</button>
        </Form>
        <Form action={`/delete/${product.id}`} method="post">
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