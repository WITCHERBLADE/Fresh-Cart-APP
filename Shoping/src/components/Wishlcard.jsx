import { IoAddOutline } from "react-icons/io5";
import {useSelector,useDispatch} from "react-redux";
import { bagActions } from "../store/BagSlice";

function Wishlcard({item}){
  const dispatch = useDispatch();

  function handleClick(){
  dispatch(bagActions.addPostToBag(item.id));
  }
  return(
    <tr>

    <td class="align-middle">
       <a href="#"><img src={item.image} class="icon-shape icon-xxs" alt="" style={{height:"150px", width:"150px",  objectFit: "contain"}}/></a>
    </td>
    <td class="align-middle">
       <div>
          <h5 class="fs-6 mb-0"><a href="#" class="text-inherit" style={{textDecoration:"none",color:"gray"}}>{item.item_name}</a></h5>
          <small></small>
       </div>
    </td>
    <td class="align-middle">Rs {item. current_price}</td>
    <td class="align-middle"><span class="badge bg-success">In Stock</span></td>
    <td class="align-middle">
    <button type="button" className="btn btn-success" onClick={handleClick}> <IoAddOutline style={{fontSize:"20px"}}/>Add</button>
    </td>
    <td class="align-middle">
       <a href="#" class="text-muted" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Delete" data-bs-original-title="Delete">
          <i class="feather-icon icon-trash-2"></i>
       </a>
    </td>
 </tr>
  )
}

export default Wishlcard;