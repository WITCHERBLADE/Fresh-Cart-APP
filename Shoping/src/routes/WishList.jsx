import Bagitem from "../components/Bagitem.";
import {useSelector } from "react-redux";

import Wishlcard from "../components/Wishlcard";

function WishList(){
  const bagitem =  useSelector(state => state.bag);
  const items = useSelector(state => state.items);
  
 
 
 
   const finalItems = items.filter(item=>{
   const itemFound = bagitem.indexOf(item.id);
   return itemFound >= 0 ;
 })
 
 
 
   return(<>
     
     <main>
     <h1 style={{margin:"30px 20px"}}>My WishList</h1>
     <h3>There are {finalItems.length} Products in my wishlist.</h3>
     <div className="bag-page" >
    
     <div class="table-responsive">
                           <table class="table text-nowrap table-with-checkbox">
                              <thead class="table-light">
                                 <tr>
                                    
                                    <th>Product</th>
                                    <th>Item</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                    <th>Remove</th>
                                 </tr>
                              </thead>
                              <tbody>
                              {finalItems.map((item)=>{
     return <Wishlcard item={item} key={item.id}/>
     })}
                                 

                              </tbody>
                           </table>
                        </div>
   
    
    </div>
    </main>
   
     </>
   )
}



export default WishList;