import React,{useState} from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { getTaskCountsFromTasks, normalizeTask } from '../../utils/LocalStorage'

const CreateTask = () => {

    const[userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [date, setDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')
    const [taskDescription, setTaskDescription] = useState('')

    const submitHandler =(e)=>{
        e.preventDefault();
        const taskData = {
            taskTitle,
            taskDescription,
            taskDate: date,
            category,
            active: false,
            newTask: true,
            completed: false,
            failed: false,
        }

        const updatedUsers = userData.map((elem)=>{
            if(assignTo === elem.firstName){
                const nextTasks = [...elem.tasks, normalizeTask(taskData)]

                return {
                    ...elem,
                    tasks: nextTasks,
                    taskCounts: getTaskCountsFromTasks(nextTasks),
                }
            }

            return elem
        })

        setUserData(updatedUsers)

        setTaskTitle('')
        setDate('')
        setAssignTo('')
        setCategory('')
        setTaskDescription('')
        
    }

  return (
    <div className='mt-5 p-5 bg-[#1C1C1C] rounded'>
        <form onSubmit={(e)=>{
            submitHandler(e)
        }} 
        className='flex flex-wrap w-full  items-start justify-between '>
        <div className='w-1/2'>
            <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                <input
                value={taskTitle}
                onChange={(e)=>{
                    setTaskTitle(e.target.value)
                }} 
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' type='text' placeholder='Make a UI design' />
            </div>
            
            <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>date</h3>
                <input
                value={date}
                onChange={(e)=>{
                    setDate(e.target.value)
                }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' type='date' />
            </div>
            <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
                <input
                value={assignTo}
                onChange={(e)=>{
                    setAssignTo(e.target.value)
                }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' type='text' placeholder='employee name' />
            </div>
            <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                <input 
                value={category}
                onChange={(e)=>{
                    setCategory(e.target.value)
                }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' type='text' placeholder='design, development, etc' />
            </div>
        </div>

        <div className='w-1/2 flex flex-col item-start'>
            <h3 className='text-sm text-gray-300 mb-0.5'>Task Description</h3>
            <textarea 
            value={taskDescription}
            onChange={(e)=>{
                setTaskDescription(e.target.value)
            }}
            className='w-full h-44 text-sm py-2 px-3 outline-none bg-transparent border border-gray-400 '
             name='' id='' cols='' rows='' > 
             </textarea>
            <button className='bg-emerald-500 active:scale-95 hover:bg-emrald-600 mt-4 py-3 px-5 rounded text-sm w-full ' >Create Task</button>
        </div>
            
        </form>
      </div>
  )
}

export default CreateTask
