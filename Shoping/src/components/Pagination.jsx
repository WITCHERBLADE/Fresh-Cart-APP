import {Link } from "react-router-dom";

function Pagination(){
  return (
    <nav aria-label="Page navigation example" style={{margin:"20px 45%"}}>
    <ul class="pagination">
      
      <li class="page-item"><Link class="page-link" href="/" style={{color:"grey",border:".5px solid grey"}}>1</Link></li>
      <li class="page-item"><Link class="page-link" to="/fruits" style={{color:"grey",border:".5px solid grey",}}>2</Link></li>
      <li class="page-item"><Link class="page-link" to="/Grocery" style={{color:"grey",border:".5px solid grey",}}>3</Link></li>
      <li class="page-item"><Link class="page-link" to="/wishlist" style={{color:"grey",border:".5px solid grey",}}>4</Link></li>
      <li class="page-item"><Link class="page-link" to="/profile" style={{color:"grey",border:".5px solid grey",}}>5</Link></li>
      <li class="page-item"><Link class="page-link" to="/bag" style={{color:"grey",border:".5px solid grey",}}>6</Link></li>
      
    </ul>
  </nav>
  )
}

export default Pagination;