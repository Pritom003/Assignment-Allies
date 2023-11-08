import axios from "axios";

const instance=axios.create({
  baseURL:'https://assignment-allies-server-site.vercel.app/',
  withCredentials:true
})
const useAxios=()=>{
  return instance
}
export default useAxios