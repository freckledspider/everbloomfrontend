import { Link } from "react-router-dom";
import { Form } from "react-router-dom";

// Shows product cards from database in shopping cart
const ProductCard = ({ post }) => {
  return (
    <div id="productCard">
      <table>
      <tr>
      <td><Link to={`/product/${post.id}`}>
        <h3>{post.product}</h3>
      </Link>
      <Link to={`/product/${post.id}`}><img src={post.image} alt="" width="200" /></Link></td>
      <td><h3>${post.price}</h3>
      Card Message: <i>"{post.card}"</i><br/>
      <Link to={`/product/${post.id}`}>Edit Card Message</Link><br/><br/>
      <Form action={`/delete/${post.id}`} method="post">
        <button>Remove from cart</button>
      </Form></td>
      </tr>
      </table>
      <hr></hr>
    </div>
  );
};

export default ProductCard