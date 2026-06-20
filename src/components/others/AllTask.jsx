import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  
const [userData, setUserData] = useContext(AuthContext)



  return (
    <div id="Alltasks" className='bg-[#1C1C1C] p-5 rounded mt-5  '>
       
       <div className='bg-red-400 mb-2  py-2 px-4 flex justify-between rounded'>
        <h2 className='tetx-lg font-medium w-1/5   '>Employee Name</h2>
        <h3 className='tetx-lg font-medium w-1/5  '>New Task</h3>
        <h5 className='tetx-lg font-medium w-1/5  '>Active Task</h5>
        <h5 className='tetx-lg font-medium w-1/5  '>Completed</h5>
        <h5 className='tetx-lg font-medium w-1/5  '>Failed</h5>
      </div>
      
      <div id='Alltasks' className=' '>
        {userData.map(function(elem,idx){
        return <div key={idx} className='border-2 border-emerald-300 mb-2  py-2 px-4 flex justify-between rounded'>
        <h2 className='w-1/5   '>{elem.firstName}</h2>
        <h3 className='tetx-lg font-medium w-1/5 text-blue-600   '>{elem.taskCounts.newTask}</h3>
        <h5 className='tetx-lg font-medium w-1/5 text-yellow-500   '>{elem.taskCounts.active}</h5>
        <h5 className='tetx-lg font-medium w-1/5 text-green-600   '>{elem.taskCounts.completed}</h5>
        <h5 className='tetx-lg font-medium w-1/5 text-red-600   '>{elem.taskCounts.failed}</h5>
      </div>
      })}
      </div>
      
      
    </div>
  )
}

export default AllTask
