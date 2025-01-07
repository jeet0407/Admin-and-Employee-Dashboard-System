import React , { useContext, useState } from 'react'
import { AuthContext } from '@/Context/AuthProvider';

const CreateTask = () => {

  const userData = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()

        setNewTask({ taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false })

        const data = userData

        data.forEach(function (elem) {
            if (asignTo == elem.firstName) {
                elem.tasks.push(newTask)
                elem.taskCounts.newTask = elem.taskCounts.newTask + 1
            }
        })
        setUserData(data)
        console.log(data);

        setTaskTitle('')
        setCategory('')
        setAsignTo('')
        setTaskDate('')
        setTaskDescription('')
      }

  return (
    <div>
        <h1 className="text-center font-bold text-5xl p-8">Admin Panel</h1>
        <form onSubmit = {(e) => {
          submitHandler(e)
        }}>
        <div className="flex justify-center mt-8">
          <div className="bg-blue-900 py-14 px-8 text-white w-full max-w-[80%] rounded-lg shadow-lg">
            <h2 className="text-3xl mb-6 font-semibold text-center">
              Create Task
            </h2>

            <form className="space-y-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                <div>
                  <label className="block text-lg mb-2">Task Title</label>
                  <input
                    value={taskTitle}
                    onChange={(e) => {
                        setTaskTitle(e.target.value)
                    }}
                    className="w-full px-4 py-2 rounded-md bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-400" type="text"
                  />
                </div>

                <div>
                  <label className="block text-lg mb-2">Date</label>
                  <input
                    value={taskDate}
                    onChange={(e) => {
                        setTaskDate(e.target.value)
                    }}
                    className="w-full px-4 py-2 rounded-md bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-400" type="date"/>
                </div>

                <div>
                  <label className="block text-lg mb-2">Assign To</label>
                  <input
                    value={asignTo}
                    onChange={(e) => {
                        setAsignTo(e.target.value)
                    }}
                    className="w-full px-4 py-2 rounded-md bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-400" type="text"
                  />
                </div>

                <div>
                  <label className="block text-lg mb-2">Category</label>
                  <input
                    value={category}
                    onChange={(e) => {
                        setCategory(e.target.value)
                    }}
                    className="w-full px-4 py-2 rounded-md bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-400" type="text"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div>
                  <label className="block text-lg mb-2">Task Description</label>
                  <textarea
                    value={taskDescription}
                    onChange={(e) => {
                        setTaskDescription(e.target.value)
                    }}
                    rows = "8"
                    className="w-full px-4 py-2 rounded-md bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-400" 
                  />
                </div>

                {/* Submit Button (full width for mobile, aligns on the right for larger screens) */}
                <button
                  className="w-full bg-green-500  text-white py-3 rounded-md font-semibold text-lg hover:bg-green-600 transition duration-300"
                >
                  Create Task
                </button>
              </div>
            </form>
          </div>
        </div>
        </form>
      </div>
  )
}

export default CreateTask