import { createBrowserRouter,
  
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Pages/Main/Main";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Errorpage from "../Pages/Errorpage";
import AddAssignment from "../Pages/AddAssignments/Addassignment";
import AllAssignment from "../Pages/assignments/AllAssignment";
import Details from "../Pages/assignments/Details";
import Updateassign from "../Pages/Updateassign";
import Privaterout from "./PrivateRoutes";
import Takeassignment from "../Pages/TakeAssignment.jsx/Takeassignment";


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
        element:<Privaterout><AddAssignment></AddAssignment></Privaterout>
      },
      {
        path:'/update/:_id',
        element:<Updateassign></Updateassign>,
        loader:({params})=>fetch(`http://localhost:5000/assignments/${params._id}`)
      },
      {
        path:'/take/:_id',
        element:<Takeassignment></Takeassignment>,
        loader:({params})=>fetch(`http://localhost:5000/assignments/${params._id}`)
      },
      {
        path:'/allass',
        element:<AllAssignment></AllAssignment>
      },
      {
        path:'/details/:_id',
        element:<Privaterout><Details></Details></Privaterout>,
        loader:({params})=>fetch(`http://localhost:5000/assignments/${params._id}`)
      }
      
    ]
  },
]);
export default router;