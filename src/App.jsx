import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'
import { getTaskCountsFromTasks, normalizeTask } from './utils/LocalStorage'

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, setUserData] = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')

    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser)
      setUser(parsedUser.role)
      setLoggedInUserData(parsedUser.data || null)
    }
  }, [])

  useEffect(() => {
    if (user === 'admin') {
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    }

    if (user === 'employee' && loggedInUserData && userData) {
      const updatedEmployee = userData.find(
        (employee) => employee.email === loggedInUserData.email
      )

      if (updatedEmployee) {
        setLoggedInUserData(updatedEmployee)
        localStorage.setItem(
          'loggedInUser',
          JSON.stringify({ role: 'employee', data: updatedEmployee })
        )
      }
    }
  }, [user, userData, loggedInUserData])

  const updateEmployeeData = (employeeEmail, transformTasks) => {
    setUserData((currentUsers = []) =>
      currentUsers.map((employee) => {
        if (employee.email !== employeeEmail) {
          return employee
        }

        const nextTasks = transformTasks(employee.tasks)
        const normalizedTasks = nextTasks.map(normalizeTask)

        const updatedEmployee = {
          ...employee,
          tasks: normalizedTasks,
          taskCounts: getTaskCountsFromTasks(normalizedTasks),
        }

        if (user === 'employee' && loggedInUserData?.email === employeeEmail) {
          setLoggedInUserData(updatedEmployee)
        }

        return updatedEmployee
      })
    )
  }

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
      return
    }

    if (userData) {
      const employee = userData.find(
        (entry) => email === entry.email && password === entry.password
      )

      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem(
          'loggedInUser',
          JSON.stringify({ role: 'employee', data: employee })
        )
        return
      }
    }

    alert('invalid credentials')
  }

  const handleAcceptTask = (employeeEmail, taskIndex) => {
    updateEmployeeData(employeeEmail, (tasks) =>
      tasks.map((task, index) =>
        index === taskIndex
          ? {
              ...task,
              newTask: false,
              active: true,
              completed: false,
              failed: false,
            }
          : task
      )
    )
  }

  const handleCompleteTask = (employeeEmail, taskIndex) => {
    updateEmployeeData(employeeEmail, (tasks) =>
      tasks.map((task, index) =>
        index === taskIndex
          ? {
              ...task,
              active: false,
              completed: true,
              newTask: false,
              failed: false,
            }
          : task
      )
    )
  }

  const handleFailTask = (employeeEmail, taskIndex) => {
    updateEmployeeData(employeeEmail, (tasks) =>
      tasks.map((task, index) =>
        index === taskIndex
          ? {
              ...task,
              active: false,
              failed: true,
              newTask: false,
              completed: false,
            }
          : task
      )
    )
  }

  const handleDeleteTask = (employeeEmail, taskIndex) => {
    updateEmployeeData(employeeEmail, (tasks) => tasks.filter((_, index) => index !== taskIndex))
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user === 'admin' ? (
        <AdminDashboard changeUser={setUser} />
      ) : user === 'employee' ? (
        <EmployeeDashboard
          changeUser={setUser}
          data={loggedInUserData}
          onAcceptTask={handleAcceptTask}
          onCompleteTask={handleCompleteTask}
          onFailTask={handleFailTask}
          onDeleteTask={handleDeleteTask}
        />
      ) : null}
    </>
  )
}

export default App
