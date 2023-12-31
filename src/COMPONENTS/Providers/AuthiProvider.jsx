import { createContext, useEffect, useState } from "react";
import app from "./firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import axios from "axios";

const provider=new GoogleAuthProvider()
const auth = getAuth(app);
export const AuthContext=createContext(null)
const AuthiProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }

  const loginuser=(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
  }
  const creategooglesignup=()=>{
    setLoading(true)
    return signInWithPopup(auth, provider)
  }



  const logout=()=>
  {
    setLoading(true)
    return signOut(auth);
    // return axios.post('https://assignment-allies-server-site.vercel.app/logout', {}, 
    // { withCredentials: true })
    // .then(() => {
      
    //   return signOut(auth);
    // })
    // .catch(error => {
    //   console.error('Axios Error:', error);
    //   // Handle the error, provide feedback to the user, or take appropriate actions.
    // });
}
  useEffect(()=>{
    const unSubscribe=  onAuthStateChanged(auth,
     
     
     currentUser=>{
   
       console.log('user auth',currentUser)
       setUser(currentUser)
       setLoading(false)
   
     })
   return ()=>{
     unSubscribe()
   }
   },[])


  const userinfo={
    createUser,
    loginuser,
    creategooglesignup,
    logout,
    loading
,user  
  }


  return (
 <AuthContext.Provider value={userinfo}>
{children}
 </AuthContext.Provider>
  );
};

export default AuthiProvider;