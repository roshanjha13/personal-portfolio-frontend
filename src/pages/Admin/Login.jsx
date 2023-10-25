import { message } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../../redux/rootSlice";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch()
  const login = async(item)=>{
    try {
        dispatch(ShowLoading())
        const response = await axios.post('http://localhost:3000/api/admin-login',user);
        dispatch(HideLoading())
        if(response.data.success){
            message.success(response.data.message)
            localStorage.setItem('token',JSON.stringify(response.data))
            window.location.href = '/admin'
        }
    } catch (error) {
        message.error(error.message)
        dispatch(HideLoading())
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-primary">
      <div className="w-96 flex gap-5 p-5 shadow border border-white flex-col rounded-lg bg-white">
        <h1 className="text-2xl">Roshan -Admin Login</h1>
        <hr/>
        <input
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="username"
          className="rounded-full"
        />
        <input
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="password"
          className="rounded-full"
        />
        <button className="bg-primary text-white p-2 rounded-lg" onClick={login}>Login</button>
      </div>
    </div>
  );
};

export default Login;
