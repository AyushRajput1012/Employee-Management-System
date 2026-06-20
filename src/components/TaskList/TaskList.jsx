import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data, onAcceptTask, onCompleteTask, onFailTask, onDeleteTask}) => {
  return (
    <div id='taskList' className=' h-[55%] overflow-x-auto flex items-center justify-start flex-nowrap gap-5 w-full py-5 mt-10'>
      {data?.tasks?.map((elem, idx)=>{
        if(elem.active){
          return <AcceptTask key={idx} employee={data} task={elem} taskIndex={idx} onCompleteTask={onCompleteTask} onFailTask={onFailTask} />
        }
        if(elem.newTask){
          return <NewTask key={idx} employee={data} task={elem} taskIndex={idx} onAcceptTask={onAcceptTask} />
        }
        if(elem.completed){
          return <CompleteTask key={idx} employee={data} task={elem} taskIndex={idx} onDeleteTask={onDeleteTask} />
        }
        if(elem.failed){
          return <FailedTask key={idx} employee={data} task={elem} taskIndex={idx} onDeleteTask={onDeleteTask} />
        }
        return null
      })}
    </div>
  )
}

export default TaskList
