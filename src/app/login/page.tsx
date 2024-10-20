"use client";
import Link from "next/link";
import React, {useState} from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginPage(){
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    })

    const onLogin = async () => {

    }

    return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <div className="mb-8">
        <h1 className="text-3xl mb-8">Login Here</h1>
        </div>
      <div className="w-1/2 p-4">
      <div className="flex gap-1 flex-col">
       <label htmlFor="email">Email</label>
        <input 
        className="p-2 border text-black border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        type="email"
        id="email"
        value={user.email}
        onChange={(e) => setUser({...user, email: e.target.value})}
        placeholder="Email"
        />
       </div>
        <div className="flex gap-1  flex-col">
        <label htmlFor="password">Password</label>
        <input 
        className="p-2 border  text-black border-gray-300 rounded-lg focus:outline-none focus:border-gray-600"
        type="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({...user, password: e.target.value})}
        placeholder="Password"
        />
        </div>
        <div className="flex mb-4 justify-between gap-1">
        <Link className="text-blue-600 text-sm mt-1 block" href="/signup">Forgot Password?</Link>
        <Link className="text-[#a8dadc] text-sm mt-1 block" href="/signup">Don't Have a Account?Signup here</Link>
        </div>
        <button 
        onClick={onLogin}
        className="py-2 px-4 hover:bg-[#a51b1b]  bg-[#e63946] text-lg border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 w-full">
            Login here
        </button>
      </div>
    </div>
    )
};