import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hook/useAuth";


export default function LoginPage() {
   const navigate = useNavigate();
   const location = useLocation();
   const { signIn } = useAuth();

   const fromPage = location.state?.from?.pathname || '/';

   const login = (e) => {
      e.preventDefault();
      const name = e.target.username.value;
      signIn(name, () => {
         navigate(fromPage);
      })
   }

   return (
      <div>
         <h1>Login</h1>
         <form onSubmit={login}>
            <label >
               Name: <input type="text" placeholder="name" name="username" />
               <button type="submit">Sign In</button>
            </label>
         </form>
      </div>
   )
}