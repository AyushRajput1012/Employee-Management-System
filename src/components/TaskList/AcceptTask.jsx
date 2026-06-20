import React from 'react'

const AcceptTask = ({employee, task, taskIndex, onCompleteTask, onFailTask}) => {
    
  return (
    <div className='h-full shrink-0 w-75 p-5 bg-yellow-400 rounded-xl'>
        <div className='flex justify-between items-center '>
      <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{task.category}</h3>
      <h4 className='text-sm'>{task.taskDate}</h4>
        </div>
    <h2 className='mt-5 text-2xl font-semibold'>{task.taskTitle}</h2>
        <p className='text-sm mt-2'>
      {task.taskDescription}
        </p>
        <div className='flex justify-between mt-4'>
      <button onClick={()=>onCompleteTask(employee.email, taskIndex)} className='bg-green-500 py-1 px-2 text-sm rounded hover:bg-green-700 active:scale-95'>Mark as Complete</button>
      <button onClick={()=>onFailTask(employee.email, taskIndex)} className='bg-red-500 py-1 px-2 text-sm rounded hover:bg-red-700 active:scale-95'>Mark as Failed</button>
        </div>
      </div>
  )
}

export default AcceptTask
