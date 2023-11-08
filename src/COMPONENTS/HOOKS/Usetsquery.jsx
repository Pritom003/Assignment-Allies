import React from 'react';

const Usetsquery = () => {


  const {data,isloading,isfetching,refetch}=useQuery(
    {
      queryKey:"all_assignment",
      queryFn:async()=>{
        const data= await  fetch(`https://assignment-allies-server-site.vercel.app/assignments?page=${currentPage}&size=${itemsPerPage}`)
        return await data.json
      }
    }
  )
  return{data,isloading,isfetching,refetch}

};

export default Usetsquery;