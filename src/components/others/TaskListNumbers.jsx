import React from 'react'
import { getTaskCountsFromTasks } from '../../utils/LocalStorage'

const TaskListNumbers = ({data}) => {
    const taskCounts = getTaskCountsFromTasks(data?.tasks || [])

  return (
    <div className='flex m-10 justify-between gap-5 screen'>
        <div className=' w-[45%] rounded-xl py-6 px-9 bg-blue-950'>
                        <h2 className='text-3xl font-semibold'>{taskCounts.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className=' w-[45%] rounded-xl py-6 px-9 bg-yellow-400'>
                        <h2 className='text-3xl font-semibold'>{taskCounts.active}</h2>
            <h3 className='text-xl font-medium'>Accepted Task</h3>
        </div>
        <div className=' w-[45%] rounded-xl py-6 px-9 bg-green-400'>
                        <h2 className='text-3xl font-semibold'>{taskCounts.completed}</h2>
            <h3 className='text-xl font-medium'>Completed</h3>
        </div>
        <div className=' w-[45%] rounded-xl py-6 px-9 bg-red-400'>
                        <h2 className='text-3xl font-semibold'>{taskCounts.failed}</h2>
            <h3 className='text-xl font-medium'>Failed Tasks</h3>
        </div>
      
    </div>
  )
}

export default TaskListNumbers
