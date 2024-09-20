import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";

import Footer from "../components/Footer";

import { Outlet } from "react-router-dom";
import Pagination from "../components/Pagination";

function App(){
  return(
   <>
<Header />
<Outlet />
<Pagination />
<Footer />

</>

  )
}


export default App;