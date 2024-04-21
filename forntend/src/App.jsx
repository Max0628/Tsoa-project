//src/App.js
import { Routes,Route, useNavigate } from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import useSWR from "swr";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect } from "react"



async  function fetcher(url){
  try {
    const token = Cookies.get('jwt_token')
    const response = await axios.get(url,{
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization :`Bearer ${token}`}
    })
    const responseData = await response.data
    console.log(`responseData is:${responseData}`);
    return responseData
  } catch (error) {
    console.log(`fetching error:${error}`);
    return error

  }
}


function App() {
  const navigate = useNavigate();
  const {
    data:user,
    error,
    // isLoading,
  }=useSWR("http://127.0.0.1:3001/user/profile",fetcher);


  useEffect(()=>{
    if(error){

      navigate({Login})
    }
     // eslint-disable-next-line react-hooks/exhaustive-deps
  },[Boolean(error),navigate,user?.id]);


  return (
     <Routes>
       <Route path="/" element={<Home/>}> </Route>
       <Route path="/login" element={<Login/>}> </Route>
     </Routes>
  );
}

export default App;

