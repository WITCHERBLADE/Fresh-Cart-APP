import { FaRegHeart } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { ImHome } from "react-icons/im";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";
import Rough from "./Rough";
import { BiChevronsDown } from "react-icons/bi";


function Header(){

const bagitem =   useSelector(state => state.bag);
  return(
<header>
    <div className="px-3 py-2 text-bg-light border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link to="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
            <img src="https://freshcart.codescandy.com/assets/images/logo/freshcart-logo.svg"/>
          </Link>
          




          <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto" role="search">
          <input type="search" className="form-control" placeholder="Search..." aria-label="Search" style={{width:"450px"}}/>
        </form>


          <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <Link to="/wishlist" className="nav-link text-secondary nav-icon">
              <FaRegHeart style = {{height:"50px", width:"25px"}} />
                
              </Link>
            </li>
            <li>
              <Link to="/profile" className="nav-link text-secondary nav-icon">
                
                <IoPerson style = {{height:"50px", width:"25px"}} />
                
              </Link>
            </li>
            <li>
            <Link className="action_container" to="/bag">
            <FaShoppingCart style = {{height:"50px", width:"25px"}} />
             <span className="bag-item-count">{bagitem.length}</span>
            </Link>
               </li>
           
          </ul>
        
        </div>

        <ul className="nav col-12 col-lg-auto my-2 justify-content-start my-md-0 text-small " style={{margin:"10px "}}>
            <li style={{margin:"5px "}}>
              
            <Link to="/" >
              <button type="button" class="btn btn-secondary"><ImHome style={{margin:"0 5px"}}/>Home </button>
             
              </Link>
             
            </li>
            <li style={{margin:"5px"}}>
              <Link to="/fruits" >
                
              <button type="button" class="btn btn-secondary"><FaShoppingCart style={{margin:"0 5px"}}/>Fruits and Vegetables</button>
                
              </Link>
            </li>
            <li style={{margin:"5px "}}>
            <Link to="/Grocery">
            <button type="button" class="btn btn-secondary"><FaShoppingCart style={{margin:"0 5px"}}/>Grocery</button>
            </Link>
               </li>
           
          </ul>

        
      </div>
    </div>

  </header>
  )
}

export default Header;