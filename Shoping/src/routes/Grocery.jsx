import Card from "../components/Card";
import {useSelector} from "react-redux";
function Grocery(){
  
const items = useSelector(state => state.items);


const newar = items.filter((item)=>{
return item.id>8;
});

// console.log("new arr is ", newar);

  return (
    <>
    <div style={{margin:"40px 20px"}}>
    <h1 >Grocery Items</h1>
    <h3>eat fresh, stay Healthy</h3>
    </div>
    <div className="Fruit-con">
      {newar.map((item)=>{
       return <Card item={item} key={item.item_name}/>
      })}
 </div>
 </>

  )
}


export default Grocery;