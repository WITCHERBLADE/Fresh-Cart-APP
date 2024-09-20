import { TiDelete } from "react-icons/ti";
import {useDispatch} from "react-redux";
import { bagActions } from "../store/BagSlice";

function Bagitem({item}){

const dispatch = useDispatch();


  function handleclick(){
    dispatch(bagActions.RemoveFromBag(item.id));
  }
  return (
        
  <div className="bag-item-container">
  <div className="item-left-part">
    <img className="bag-item-img" src={item.image}/>
  </div>
  <div className="item-right-part">
   
    <div className="item-name">{item.item_name}</div>
    <div className="price-container">
      <span className="current-price">Rs{item.current_price}</span>
      <span className="original-price">Rs {item. original_price}</span>
      
    </div>
    <div className="return-period">
      <span className="return-period-days">14 days</span> return available
    </div>
    <div className="delivery-details">
      Delivery by
      <span className="delivery-details-days">20</span>
    </div>
  </div>

  <div className="remove-from-cart" onClick={handleclick}><TiDelete />
</div>
</div>
  )
}


export default Bagitem;