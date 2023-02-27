import { Link } from "react-router-dom";
import inventory from "../inventory";
import flowerPhoto from "../flowerphoto.jpg"

const Index = (props) => {
  return <>
    <div className="welcomeText mobileDisplayNone" >Fresh from<br/>&nbsp;&nbsp;&nbsp;&nbsp;our garden</div>
    <div className="index">
    <table>
    <tr>
    <td>
      <h2>Welcome</h2>
      Everbloom is a florist website that offers a stunning selection of fresh and beautiful flowers for any occasion. Our passionate team of florists carefully handcraft each bouquet to create unique and memorable arrangements that are perfect for expressing your love, appreciation, or condolences. From elegant roses to cheerful sunflowers, we have something for everyone.</td>
    <td><img className="mobileDisplayNone" src={flowerPhoto} alt="Pink peony bouquet" width="250"/></td>
    </tr>
    </table><br/>
    <hr></hr>
    <table>
    <tr>
    <td><h2>Best Sellers</h2></td>
    </tr>
    <tr align="center">
    <td><h3><Link to={`/inventory/${inventory[2].id}`}>{inventory[2].product}</Link></h3><img src={inventory[2].image} alt={inventory[2].description} width="250" /></td>
    <td><h3><Link to={`/inventory/${inventory[5].id}`}>{inventory[5].product}</Link></h3><img src={inventory[5].image} alt={inventory[5].description} width="250" /></td>
  </tr>
  </table>
  </div>
  </>
};

export default Index;