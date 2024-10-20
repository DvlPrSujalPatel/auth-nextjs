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
        <h1 className="text-3xl text-white">Sign UP</h1>
        <hr />
        <label htmlFor="username">Username</label>
        <input 
        className="p-2 border text-black border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        type="text"
        id="username"
        value={user.username}
        onChange={(e) => setUser({...user, username: e.target.value})}
        placeholder="username"
        />
        <label htmlFor="email">Email</label>
        <input 
        className="p-2 border text-black border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        type="email"
        id="email"
        value={user.email}
        onChange={(e) => setUser({...user, email: e.target.value})}
        placeholder="Email"
        />
        <label htmlFor="password">Password</label>
        <input 
        className="p-2 border  text-black border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        type="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({...user, password: e.target.value})}
        placeholder="Password"
        />
        <button 
        onClick={onSignup}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">
            Signup here
        </button>
        <Link href="/login">Already registered?</Link>
    </div>
};