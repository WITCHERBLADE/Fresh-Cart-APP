import Homepage from "../components/Homepage";

import Grocery from "./Grocery";
import {Link} from "react-router-dom";
import Fruits from "./Fruits";

function Home(){
  return(<>
    <Homepage />
    <Fruits />
    <Grocery />
   
    </>
  )
}

export default Home;