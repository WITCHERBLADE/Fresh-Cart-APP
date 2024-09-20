import BagSummary from "../components/BagSummary";
import Bagitem from "../components/Bagitem.";
import {useSelector } from "react-redux";

function Bag(){
 const bagitem =  useSelector(state => state.bag);
 const items = useSelector(state => state.items);
 



  const finalItems = items.filter(item=>{
  const itemFound = bagitem.indexOf(item.id);
  return itemFound >= 0 ;
})

console.log(finalItems);

console.log("items in bag is ",finalItems);

  return(<>
    
    <main>
    <div className="bag-page" >
    <div className="bag-items-container">
    {finalItems.map((item)=>{
    return  <Bagitem item={item} key={item.id}/>
    })}
   
    </div>
    <BagSummary />
   </div>
   </main>
  
    </>
  )
}

export default Bag;