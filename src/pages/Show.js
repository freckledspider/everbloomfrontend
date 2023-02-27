import { useLoaderData, Form } from "react-router-dom";
// Show details of shopping cart to edit the card message or remove from cart
const Show = () => {
  const product = useLoaderData();

  return (
    <div className="show">
      <table>
      <tr>
      <td><img src={product.image} alt={product.description} width="400" /></td>
      <td><h2>{product.product}</h2>
      <h3>${product.price}</h3>
      <hr></hr><br/><br/>
      {product.description}
      <h3>Edit card message</h3>
        <Form action={`/update/${product.id}`} method="post">
          <input
            className="displayNone"
            type="text"
            name="product"
            placeholder="product name"
            defaultValue={product.product}
          />
          <input
            className="displayNone"
            type="text"
            name="image"
            placeholder="image"
            defaultValue={product.image}
          />
            <input
            className="displayNone"
            type="text"
            name="price"
            placeholder="price"
            defaultValue={product.price}
          />
            <input
            className="displayNone"
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
      </td>
      </tr>
      </table>
    </div>
  );
};

export default Show;