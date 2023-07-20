"use client";
import Link from "next/link";
import React, { useState } from "react";
import Swal from "sweetalert2";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email.trim() === "" || password.trim() === "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill in all fields before logging in.',
        footer: '<a href="">Type Any thing You want</a>'
      })
      return;
    } 

    // Your login logic here
    // For example, you can redirect the user to the dashboard
    // after successful login using Next.js router or perform API calls.
    // For simplicity, we'll just show an alert for successful login.
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  };

  return (
    <div className="p-12">
      <h1 className="text-2xl font-bold">Login</h1>
      <p>Donec tortor quam at duis tortor.</p>
      <div className="my-5">
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">E-Mail</span>
          </label>
          <input
            type="text"
            placeholder="Enter Your Email Here"
            className="input input-bordered w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="form-control w-full ">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="text-right my-2">
        <p className="hover:cursor-pointer hover:underline hover:text-blue">
          Forgot password?
        </p>
      </div>
      <Link href={`${email&&password?"/dashboard":""}`}>
        <button onClick={handleLogin} className="btn btn-block my-2 bg-blue-500 hover:bg-blue-600 text-white">
          Login
        </button>
      </Link>
      <div className="divider">OR</div>
      <button className="btn btn-block my-2 btn-outline hover:bg-gray-50 text-black hover:text-black">
        Register
      </button>
    </div>
  );
};

export default LoginForm;
