import { Link } from "react-router-dom";

const ProductCard = ({ post }) => {
  return (
    <div>
      <Link to={`/product/${post.id}`}>
        <h1>{post.product}</h1>
      </Link>
      <h2>{post.price}</h2>
    </div>
  );
};

export default ProductCard