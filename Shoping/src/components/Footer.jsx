import { Link } from "react-router-dom";

function Footer(){
  return (
    <footer>
    <div className="footer_container">
        <div className="footer_column">
            <h3>Categories</h3>

            <Link to="/fruits">Fruits and Vegetables</Link>
            <Link to="/Grocery">Grocery</Link>
            <a href="#">Bakery</a>
            <a href="#">Home & Living</a>
            
            <a href="#">Gift Card</a>
            
        </div>

        <div className="footer_column">
        <h3>Categories</h3>

        <Link to="/fruits">Fruits and Vegetables</Link>
            <Link to="/Grocery">Grocery</Link>
<a href="#">Bakery</a>
<a href="#">Home & Living</a>

<a href="#">Gift Card</a>
        </div>

        <div className="footer_column">
        <h3>Categories</h3>

        <Link to="/fruits">Fruits and Vegetables</Link>
            <Link to="/Grocery">Grocery</Link>
<a href="#">Bakery</a>
<a href="#">Home & Living</a>

<a href="#">Gift Card</a>
        </div>
    </div>
    <hr/>

    <div className="copyright">
        © 2024 Freshcart All rights reserved.
    </div>
</footer>
  )
}


export default Footer;