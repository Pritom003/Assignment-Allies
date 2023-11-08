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
import Myassignment from "../Pages/Myassignment/Myassignment";
import Allsubmission from "../Pages/Submissions/Allsubmission";
import Markassignment from "../Pages/Submissions/Markassignment";


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
        loader:({params})=>fetch(`https://assignment-allies-server-site.vercel.app/assignments/${params._id}`)
      },
      {
        path:'/take/:_id',
        element:<Takeassignment></Takeassignment>,
        loader:({params})=>fetch(`https://assignment-allies-server-site.vercel.app/assignments/${params._id}`)
      },
      {
        path:'/allass',
        element:<AllAssignment></AllAssignment>
      },
      {
        path:'/allsubm',
        element:<Privaterout><Allsubmission></Allsubmission>,</Privaterout>
      ,
        loader:()=>fetch(`https://assignment-allies-server-site.vercel.app/mysub`)
       
      },
      {
        path:'/myassign',
        element:<Privaterout><Myassignment></Myassignment></Privaterout>
      
       
      },
      {
        path:'/markass/:id',
        element:<Markassignment></Markassignment>,
        loader:({params})=>fetch(`https://assignment-allies-server-site.vercel.app/mysub/${params.id}`)
        
       
      },
      {
        path:'/details/:_id',
        element:<Privaterout><Details></Details></Privaterout>,
        loader:({params})=>fetch(`https://assignment-allies-server-site.vercel.app/assignments/${params._id}`)
      }
      
    ]
  },
]);
export default router;