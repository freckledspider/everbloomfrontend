import { Link } from "react-router-dom";
// Shows product cards from database in shopping cart
const ProductCard = ({ post }) => {
  return (
    <div>
      <Link to={`/product/${post.id}`}>
        <h1>{post.product}</h1>
      </Link>
      <img src={post.image} alt="" width="200" />
      <h2>{post.price}</h2>
    </div>
  );
};

export default ProductCard