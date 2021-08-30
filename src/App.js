import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <>
    <TodoList />
    <input type="text" />
    <button>Add Todo</button>
    <button>Clear Completed Todos</button>
    <div>0 left to do</div>
    </>
  );
}

export default App;
