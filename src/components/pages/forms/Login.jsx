import React, { useState } from "react";
import "./forms.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {

  const [email, setEmail ] = useState("");
  const [password, setPassword] = useState("");

const formSubmitHandler = (e)=>{
e.preventDefault();
if(email.trim() === ""){
  return toast.error("Email is required");
}

if(password.trim() === ""){
  return toast.error("Password is required");
}

}

  return (
    <div className="form-wrapper" onSubmit={formSubmitHandler}>
              <ToastContainer theme="colored" />

      <form className="form">
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <button type="submit" className="form-btn">
          Login
        </button>
      </form>
    </div>
  );
}
