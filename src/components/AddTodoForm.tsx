import { useState } from "react";
interface AddTodoFormProps {
    onSubmit: (title: string) => void; // Function to handle adding a new todo
}

export default function AddTodoForm({onSubmit}: AddTodoFormProps) {
    const [inputValue, setInputValue] = useState('');
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent the default form submission behavior
        if (inputValue.trim() === '') return; // Prevent adding empty todos

        // Here you would typically send the new todo to your backend or state management
        console.log('New Todo:', inputValue);

        onSubmit(inputValue); // Call the onAddTodo function with the new todo title
        
        setInputValue(''); // Clear the input field after submission

      
    }
    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-4 mb-4">
            <input type="text" onChange={(e)=>setInputValue(e.target.value)} className="border border-gray-300 rounded-lg p-2 w-full" placeholder="Add a new todo" />
            <button type="submit" className="bg-pink-600 text-white rounded-lg p-2 mt-2 w-full">Add</button>
        </form>
    )
}