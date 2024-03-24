//src/App.js
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login"
import { useNavigate } from "react-router-dom";
import useSWR from "swr";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect } from "react";

const fetcher = (url) => {
  const token = Cookies.get("jwt_token");
  return axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((data) => data?.data?.user);
};

function App() {
  const navigate = useNavigate();
  const {
    data: user,
    error,
    // isLoading,
  } = useSWR("http://127.0.0.1:3000/member/login", fetcher);

  useEffect(() => {
    if (error) {
      // redirect login page
      navigate("login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Boolean(error), navigate, user?.id]);

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
  );
}

export default App;
