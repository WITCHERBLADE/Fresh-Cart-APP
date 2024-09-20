import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './routes/App.jsx'
import './index.css'
import {RouterProvider,createBrowserRouter} from "react-router-dom";
import Bag from './routes/Bag.jsx';
import Home from './routes/Home.jsx';
import Profile from './routes/Profile.jsx';
import {Provider} from "react-redux"
import store from './store/index.js';
import WishList from './routes/WishList.jsx';
import Fruits from './routes/Fruits.jsx';
import Grocery from './routes/Grocery.jsx';

const router = createBrowserRouter([{
  path:"/",element:<App />,
children:[
  {path:"/",element:<Home />},
  { path:"/bag", element:<Bag />},
  {path:"/profile",element:<Profile />},
  {path:"/wishlist",element:<WishList />},
  {path:"/fruits",element:<Fruits />},
  {path:"/Grocery",element:<Grocery />},
]
}]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={store}>
  <RouterProvider router={router} />
  </Provider>

  
  
  </StrictMode>,
)
