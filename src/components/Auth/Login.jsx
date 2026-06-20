import React, { useState } from 'react'

const Login = ({handleLogin}) => {

 

    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')

    const handleSubmit =(e)=>{
        e.preventDefault();
        handleLogin(email,password);

        setEmail('');
        setPassword('');
    }
  return (
    <div className='flex items-center justify-center h-screen w-screen'>
      <div className='border-emerald-600 border-2 rounded-xl p-20'>
        <form
            onSubmit={(e)=>{
                handleSubmit(e);
            }} 
            className='flex items-center justify-center flex-col'>
            <input
             value={email}
             onChange={(e)=>{
                setEmail(e.target.value);
                
             }}
             required className='text-white outline-none bg-transparent border-2 border-emerald-600 text-xl py-2 px-6 rounded-full placeholder:text-gray-400' 
             type='email' placeholder='Enter your email'
            />
            <input 
             value={password}
             onChange={(e)=>{
                setPassword(e.target.value);
                
             }}
             required className='text-white outline-none bg-transparent border-2 border-emerald-600 mt-3 text-xl py-2 px-6 rounded-full placeholder:text-gray-400' type='password' placeholder='Enter  password' />
            <button className=' mt-5 text-white outline-none active:scale-95 border-none bg-emerald-600 hover:bg-emerald-700 text-xl py-3 px-8 w-full rounded-full placeholder:text-white' >Log in</button>
        </form>

      </div>
    </div>
  )
}

export default Login
