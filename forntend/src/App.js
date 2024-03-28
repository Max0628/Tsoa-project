//src/App.js
 import {BrowserRouter,Routes,Route,useNavigate} from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import useSWR from "swr"
import axios from "axios"
import Cookie from "js-cookie"
import { useEffect } from "react";

//建立fetcher函數，參數由useSWR的url帶入
async function fetcher(url){

  try {
    //把瀏覽器中的cooke(jwt)存到變數token裡面
    const token = Cookie.get("jwt_token");
    //把jwt塞到http get request的header裡面，然後用變數response接住http response
    const response = await axios.get(url,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })

    if (response.status !== 200) {
      throw new Error('Server responded with an error');
    }

    //如果response裡面有user屬性就回傳
    const user = response?.data?.user;
    console.log(user);
    return user;
  } catch (error) {
    console.log(`fetching error: ${error}`);
    return error;
  }
}




function App() {
  //啟動導航hook
  const  navigate  = useNavigate()
  const {
    data:user,
    error
    //isLoading
  } = useSWR("http://127.0.0.1:3001/user/profile",fetcher)

 useEffect(()=>{
  if(error){
    console.log(error);
    navigate("login")
  }
    // eslint-disable-next-line react-hooks/exhaustive-deps
 },[Boolean(error),navigate,user?.id])

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

