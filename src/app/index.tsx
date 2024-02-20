import reactLogo from "@/shared/assets/react.svg";
import viteLogo from "/vite.svg";
import InputText from "@/features/inputText";
import TodoList from "@/features/todoList";

function App() {
  return (
    <div className="text-center p-5">
      <div className="flex justify-center space-x-4">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="h-16" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="h-16" alt="React logo" />
        </a>
      </div>
      <h1 className="text-xl font-bold my-5">Vite + React</h1>
      <div className="max-w-md mx-auto bg-gray-100 shadow-md rounded p-5">
        <InputText />
      </div>
      <TodoList />
    </div>
  );
}

export default App;
