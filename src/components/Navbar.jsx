import React from "react";
import { Link,useNavigate } from "react-router-dom";
import {UserAuth} from '../context/AuthContext';

const Navbar = () => {
  const {user,logOut} = UserAuth();
  const navigate = useNavigate();
  const handleLogout = async ()=>{
    try{
      await logOut();
      navigate('/')
    }catch(error){
      console.log(error);
    };
  }
  return (
    <div className=" flex justify-between items-center p-4 absolute z-[100] w-full">
      <Link to="/">
        <h1 className=" text-red-600 text-4xl font-bold cursor-pointer">
          NETFLIX
        </h1>
      </Link>
     {user?.email?  <div>
        <Link to="/account">
          <button className=" text-white pr-4">Account </button>
        </Link>
          <button onClick={handleLogout} className=" bg-red-600 text-white rounded px-6 py-2 cursor-pointer">
            Log out
          </button>
      </div>: <div>
        <Link to="/login">
          <button className=" text-white pr-4">Sign In</button>
        </Link>
        <Link to="/signup">
          <button className=" bg-red-600 text-white rounded px-6 py-2 cursor-pointer">
            Sign Up
          </button>
        </Link>
      </div>}
    </div>
  );
};

export default Navbar;
