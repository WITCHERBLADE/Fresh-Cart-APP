import { FaStar } from "react-icons/fa";
import { IoAddOutline } from "react-icons/io5";
import {useSelector,useDispatch} from "react-redux";
import { bagActions } from "../store/BagSlice";

function Card({item}){

console.log("card items are", item.image);

 const dispatch = useDispatch();

  function handleClick(){
  dispatch(bagActions.addPostToBag(item.id));
  }

  return (
    <>
       
    
    <div className="card text-center mb-3" style={{maxWidth: "16rem",margin:"30px"}}>
  <div className="card-body">
  <img src={item.image} className="img-fluid rounded-start" alt="..." style={{height:"250px", width:"200px",  objectFit: "contain"}}/> 
   <small>{item.category}</small>
    <h3>{item.item_name}</h3>
       
       <div style={{padding:"5px",margin:"20px"}}>
       <small className="text-warning">
       
       <span className="current-price">Rs {item. current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
       </small>
       <span className="text-muted small" style={{padding:"7px" , fontSize:"20px",}}>{item.rating}</span>
       <button type="button" className="btn btn-success" onClick={handleClick}> <IoAddOutline style={{fontSize:"20px"}}/>Add</button>
       </div>

       
  </div>
</div>
</>
  )
}

export default Card;