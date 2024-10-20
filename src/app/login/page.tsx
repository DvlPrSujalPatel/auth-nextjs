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

    return <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <h1 className="text-3xl text-white">Login</h1>
        <hr />
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
        onClick={onLogin}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">
            Login here
        </button>
        <Link href="/signup">Don't Have a Account?</Link>
    </div>
};