import React from 'react'
import Header from '@/Components/Others/Header';
import TaskBoard from '@/Components/Others/TaskBoard';
import TaskList from '@/Components/TaskList/TaskList';

const Emp_dash = ({data}) => {
  
  return (
    <div className='p-10 bg-white h-screen'>
        <Header  data = {data}/>
        <TaskBoard  data = {data}/>
        <TaskList  data = {data}/>
    </div>
  )
}

export default Emp_dash