import { Link } from "react-router-dom";

const Header = ({ props }) => {
    return ( <div className="header">
      <h1><a href="/">everbloom</a></h1>
      <ul>
      <li><Link to ="/cart">Cart</Link></li>
      <li><Link to ="/shop">Shop</Link></li>
      <li><Link to ="/">About</Link></li>
      </ul>
      </div>
    );
  };
  
  export default Header