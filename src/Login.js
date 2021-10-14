import React, { useState } from 'react'

export default function Login() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const register = (e)=>{
        e.preventDefault();
        if(!name){
            alert('Enter your Name')
        }

    }
    return (
        <div>
            <h1>Register</h1>
            <form>
                <input placeholder="Enter your Name : " value={name} onChange={(e)=>setName(e.target.value)} />
                <input placeholder="Email" type="email " value={email} onChange={(e)=>setEmail(e.target.value)}  />
                <input placeholder="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  />
                <button onClick={register}>Register</button>
            </form>
        </div>
    )
}
