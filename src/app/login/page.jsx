
"use client"

import React, { useState } from 'react'
import { loginAction } from '../serverActions/loginAction'
import { useRouter } from 'next/navigation'

const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const router = useRouter()

    const loginHandler = async(e)=>{
        e.preventDefault()
        const loginDetails = {email, password}
        console.log(loginDetails)
        await loginAction(loginDetails)
        router.push("/")
    }

  return (
    <div className='formContainer'>
        <h1>Login Form</h1>
        <form className='formSection' onSubmit={loginHandler}>
        <h3>Email</h3>
        <input type="email" name="email"  onChange={(e)=>setEmail(e.target.value)}/>
        <h3>Password</h3>
        <input type="text" name="password" onChange={(e)=>setPassword(e.target.value)} />
        <br /><br />
        <button type='submit'>Login</button>
        </form>
      
    </div>
  )
}

export default LoginForm
