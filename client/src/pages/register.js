import React, { useState } from 'react';

function Register() {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("") 
  
  const registerUser = async(event)=>{
    event.preventDefault()
    const response = await fetch("http://localhost:1337/api/register",{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }), 
    })
  } 
  return (
    <>
    <h1>Register</h1>
    <form onSubmit={registerUser}>
      <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
      <br/>
      <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <br/>
      <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <br/>
      <input type="submit" value="Register"/>
    </form>
    </>
  );
}

export default Register;
