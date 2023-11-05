import { createBrowserRouter,
  
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Pages/Main/Main";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Errorpage from "../Pages/Errorpage";
import AddAssignment from "../Pages/AddAssignments/Addassignment";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<Errorpage></Errorpage>,
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
      },
      {
        path:'/add',
        element:<AddAssignment></AddAssignment>
      }
      
    ]
  },
]);
export default router;