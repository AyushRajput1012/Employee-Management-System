import React, { useState } from 'react'


const header = (props) => {
 
  // const [username, setUsername] = useState('')

  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstName)
  // }
  const logOutUser=()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload()
  }

 
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br/> <span className='text-3xl font-semibold'>username 👋</span>  </h1>
      <button onClick={logOutUser} className='bg-red-600 text-lg hover:bg-red-700 text-white px-4 py-2 rounded-small active:scale-95 font-medium'>Log Out</button>
    </div>
  )
}

export default header
