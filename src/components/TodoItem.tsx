import { Trash2 } from "lucide-react";
import { Todo } from "../types/todo"

interface TodoItemProps {
    todo: Todo;
    onCompletedChange: (id: number,completed:boolean) => void;
    onDelete: (id: number) => void; // Function to delete a todo item

}

export default function TodoItem({todo,onCompletedChange,onDelete}: TodoItemProps) {

    return (
        <div className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 mb-4">
            <div className="flex items-center">
                <input type="checkbox" className="mr-4 scale-125" checked={todo.completed} onChange={(e)=>onCompletedChange(todo.id,e.target.checked)}/>
                <span className={todo.completed ? 'line-through text-gray-400': ''}>{todo.title}</span>
            </div>
            <button onClick={()=>onDelete(todo.id)} className="text-red-500 hover:text-red-700 ml-5">
                <Trash2 className="w-5 h-5" />
            </button>
        </div>
    )

}