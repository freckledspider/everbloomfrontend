import { useLoaderData, Form } from "react-router-dom";
// Show details of shopping cart to edit the card message or remove from cart
const Show = () => {
  const product = useLoaderData();

  return (
    <div>
      <h1>{product.product}</h1>
      <img src={product.image} alt="" width="400" />
      <h2>{product.price}</h2>
      {product.description}
      <div>
        <h2>Edit Card Message</h2>
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
          <button>Save</button>
        </Form>
        <Form action={`/delete/${product.id}`} method="post">
          <button>Remove from cart</button>
        </Form>
      </div>
    </div>
  );
};

export default Show;