import React from 'react'

const NewTask = ({employee, task, taskIndex, onAcceptTask}) => {
  return (
    <div className='h-full shrink-0 w-75 p-5 bg-blue-950 rounded-xl'>
        <div className='flex justify-between items-center '>
      <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{task.category}</h3>
      <h4 className='text-sm'>{task.taskDate}</h4>
        </div>
    <h2 className='mt-5 text-2xl font-semibold'>{task.taskTitle}</h2>
        <p className='text-sm mt-2'>
      {task.taskDescription}
        </p>
        <div className='mt-4'>
      <button onClick={()=>onAcceptTask(employee.email, taskIndex)} className='bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 text-sm rounded active:scale-95'>Accept Task</button>
        </div>
        
      </div>
  )
}

export default NewTask
