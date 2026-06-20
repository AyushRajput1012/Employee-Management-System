import React from 'react'

const FailedTask = ({employee, task, taskIndex, onDeleteTask}) => {
  return (
    <div className='h-full shrink-0 w-75 p-5 bg-red-400 rounded-xl'>
        <div className='flex justify-between items-center '>
      <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{task.category}</h3>
      <h4 className='text-sm'>{task.taskDate}</h4>
        </div>
    <h2 className='mt-5 text-2xl font-semibold'>{task.taskTitle}</h2>
        <p className='text-sm mt-2'>
      {task.taskDescription}
        </p>
         <div className='mt-4'>
            <button className='w-full bg-red-500 hover:bg-red-600 text-white py-1 px-2 text-sm rounded active:scale-95'>Failed</button>
            <button onClick={()=>onDeleteTask(employee.email, taskIndex)} className='w-full bg-black hover:bg-gray-800 text-white py-1 px-2 text-sm rounded active:scale-95 mt-2'>Delete</button>
        </div>
      </div>
  )
}

export default FailedTask
