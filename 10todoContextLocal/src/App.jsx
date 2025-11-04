import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from "./contexts"
import TodoItem from './components/TodoItem'
import TodoForm from './components/TodoForm'

function App() {

  const [todos, setTodos] = useState([])

  // Add new todo
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  // Update existing todo
  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    )
  }

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  // Toggle completed status
  const toggleCompleted = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    )
  }

  // Load from localStorage
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{ todos, addTodo, deleteTodo, updateTodo, toggleCompleted }}>
      {/* Full-screen background with centered card */}
      <div className="bg-[#172842] min-h-screen flex justify-center items-center px-4">
        <div className="w-full max-w-md bg-[#1e355d] text-white rounded-2xl shadow-2xl p-6 sm:p-8">
          <h1 className="text-3xl font-bold text-center mb-6">Manage Your Todos</h1>

          {/* Todo Form */}
          <div className="mb-6">
            <TodoForm />
          </div>

          {/* Todo List */}
          {todos.length === 0 ? (
            <p className="text-center text-gray-300">No todos yet. Add one above!</p>
          ) : (
            <div className="space-y-3">
              {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
              ))}
            </div>
          )}
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
