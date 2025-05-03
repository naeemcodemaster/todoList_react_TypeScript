import TodoItem from "./TodoItem";
import { Todo } from "../types/todo";
interface TodoListProps {
    todos: Todo[]; // Array of todo items
    onCompletedChange: (id: number, completed: boolean) => void; // Function to update the completed status of a todo item
    onDelete: (id: number) => void; // Function to delete a todo item
}
export default function TodoList({ todos, onCompletedChange, onDelete }: TodoListProps) {
    const todosSorted = todos.sort((a, b) => {
        if (a.completed === b.completed) {
            return 0; // No change in order if both have the same completed status
        }
        return a.completed ? 1 : -1; // Move completed todos to the end
    }
    // Sort todos by completed status, with completed todos at the end
    );
    // Map through the sorted todos and render TodoItem components
    return (
        <div className='space-y-2 mt-4'>
            {
                todosSorted.map(todo => (

                    <TodoItem todo={todo} onCompletedChange={onCompletedChange} key={todo.id} onDelete={onDelete}/>

                ))
            }
        </div>

    )
}