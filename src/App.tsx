import React from 'react'
import { dummyTodos } from './data/todos'
import TodoItem from './components/TodoItem'
import AddTodoForm from './components/addTodoForm'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = React.useState(dummyTodos)
  function setTodoCompleted(id: number, completed: boolean) {
    console.log(`Todo with id ${id} completed status changed to ${completed}`)
    setTodos(prevTodos => {
      return prevTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
    }
    )
  }

  const addTodo = (title: string) => {
    const newTodo = {
      id: todos.length + 1,
      title,
      completed: false
    }
    setTodos(prevTodos => {
      return [...prevTodos, newTodo]
    })
  }

  const deleteItem = (id: number) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== id)
    })
  }
  console.log('Todos:', todos)
  console.log(todos)
  return (
    <main className='py-10 px-4 sm:px-6 lg:px-8 h-screen flex flex-col'>
      <h1 className='text-3xl font-bold text-center'>Todo App</h1>
      <p className='text-center text-gray-500'>A simple todo app built with React and TypeScript</p>
      <div className='max-w-lg mx-auto gap-4 mt-4'>
        <AddTodoForm onSubmit={addTodo}/>
        <TodoList todos={todos} onCompletedChange={setTodoCompleted} onDelete={deleteItem}/>
      </div>
    </main>
  )
}

export default App