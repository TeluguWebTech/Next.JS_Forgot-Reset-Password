"use client"

import React, { useState } from 'react'
import { registerAction } from '../serverActions/registerAction'

import { useRouter } from 'next/navigation'

const RegisterPage = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

const router = useRouter()


  const registerHandler = async(e)=>{
        e.preventDefault();
        const registerDetails = {username, email, password}
        console.log("this is register detials", registerDetails)
        await registerAction(registerDetails)
        router.push("/login")
  }

  return (
    <div className='formContainer'>
      <h1>Register Form</h1>
      <form className='formSection' onSubmit={registerHandler}>
        <h3>Username</h3>
        <input type="text" name="username" onChange={(e)=>setUsername(e.target.value)} />
        <h3>Email</h3>
        <input type="email" name="email"  onChange={(e)=>setEmail(e.target.value)}/>
        <h3>Password</h3>
        <input type="text" name="password" onChange={(e)=>setPassword(e.target.value)} />
        <br /><br />
        <button type='submit'>Register</button>
      </form>

    </div>
  )
}

export default RegisterPage
