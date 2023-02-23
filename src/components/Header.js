import { Link } from "react-router-dom";

const Header = ({ post }) => {
    return ( <div>
      <Link to ="/">Index</Link>
      <Link to ="/shop">Shop</Link>
      <Link to ="/cart">Cart</Link>
      </div>
    );
  };
  
  export default Header