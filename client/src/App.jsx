import { useState } from 'react';
import { gql, useQuery } from "@apollo/client";
import './App.css';

const query = gql(`
  query GetAllTodo {
    getTodo {
      title
      completed
      user {
        name
        email
        phone
      }
    }
  }
`);

function App() {
    const [count, setCount] = useState(0);
    const { data, loading, error } = useQuery(query);

    if (loading) return <h1 className="text-center text-2xl font-semibold">Loading...</h1>;

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4 text-center">Todo List</h1>
            {data && data.getTodo.length > 0 ? (
                <div className="space-y-4">
                    {data.getTodo.map((todo, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-4">
                            <h2 className="text-xl font-semibold text-blue-500">{todo.title}</h2>
                            <p className={`text-md ${todo.completed ? 'text-green-500' : 'text-red-500'}`}>
                                {todo.completed ? 'Completed' : 'Pending'}
                            </p>
                            <div className="mt-4">
                                <p className="text-sm font-semibold">User Info:</p>
                                <p className="text-sm">{todo.user.name}</p>
                                <p className="text-sm">{todo.user.email}</p>
                                <p className="text-sm">{todo.user.phone}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-xl text-gray-600">No Todos found</p>
            )}
        </div>
    );
}

export default App;
