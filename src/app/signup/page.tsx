"use client";
import Link from "next/link";
import React, {useState} from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";

export default function SignUpPage(){
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })

    const onSignup = async () => {

    }

    return <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <h1 className="text-3xl mb-8">Signup Here</h1>
        <div className="w-1/2 p-4">
       <div className="flex gap-1 flex-col">
       <label htmlFor="username">Username</label>
        <input 
        className="p-2 border text-black border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        type="text"
        id="username"
        value={user.username}
        onChange={(e) => setUser({...user, username: e.target.value})}
        placeholder="username"
        />
       </div>
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
        <div className="flex gap-1 flex-col">
        <label htmlFor="password">Password</label>
        <input 
        className="p-2 border  text-black border-gray-300 rounded-lg  focus:outline-none focus:border-gray-600"
        type="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({...user, password: e.target.value})}
        placeholder="Password"
        />
        </div>
        <Link className="text-[#a8dadc] text-sm mt-1 block" href="/login">Already registered?</Link>
        <button 
        onClick={onSignup}
        className="py-2 px-4 hover:bg-[#a51b1b]  bg-[#e63946] text-lg border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 w-full mt-4">
            Signup here
        </button>
        </div>
    </div>
};