//src/App.js
import { BrowserRouter,Routes,Route, useNavigate } from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import useSWR from "swr";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect } from "react";


async  function fetcher(url){
  try {
    const token = Cookies.get('jwt_token')
    const response = await axios.get(url,{
      headers:{
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
  }=useSWR("http://localhost:3001/user/profile",fetcher);


  useEffect(()=>{
    if(error){
      navigate({Login})
    }
  },[Boolean(error),navigate,user?.id]);



  return (
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home/>}> </Route>
       <Route path="/login" element={<Login/>}> </Route>
     </Routes>
    </BrowserRouter>  
  );
}

export default App;

