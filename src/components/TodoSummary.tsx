export default function TodoSummary({ todos, deleteAllTodos }: { todos: { completed: boolean }[], deleteAllTodos: () => void }) {
    const totalTodos = todos.length;
    const completedTodos = todos.filter(todo => todo.completed).length;
    const pendingTodos = totalTodos - completedTodos;

    return (
        <div className="flex justify-between items-center bg-white shadow-md rounded-lg p-4 mb-4 mt-4">
            <div>
                <h2 className="text-lg font-semibold">Todo Summary</h2>
                <p>Total Todos: {totalTodos}</p>
                <p>Completed Todos: {completedTodos}</p>
                <p>Pending Todos: {pendingTodos}</p>
                <button onClick={deleteAllTodos} className="text-red-500 hover:text-red-700 ml-0 mt-10">
                    Delete All Todos
                </button>
            </div>

        </div>
    );
}