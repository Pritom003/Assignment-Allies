import { createBrowserRouter,
  
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Pages/Main/Main";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/login',
        element:<Login />
      },
      {
        path:'/regi',
        element:<Signup />
      }
      
    ]
  },
]);
export default router;