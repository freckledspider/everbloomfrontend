import { Link, useLoaderData } from "react-router-dom";


const Show = () => {
  const post = useLoaderData();

  return (
    <div>
      <h1>{post.product}</h1>
      <h2>{post.price}</h2>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default Show;