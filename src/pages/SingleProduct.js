import { Link, useLoaderData } from "react-router-dom";


const Show = () => {
  const product = useLoaderData();

  return (
    <div>
      <h1>{product.product}</h1>
      <h2>{product.price}</h2>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default Show;