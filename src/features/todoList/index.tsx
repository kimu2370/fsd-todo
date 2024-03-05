import { Button } from "@/widgets/ui/button";
import useTodoStore from "./useTodoStore";

const TodoList = () => {
  const [todos, store] = useTodoStore();

  return (
    <div className="flex flex-col gap-5">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex justify-between items-center max-w-md bg-gray-400 shadow-md rounded pl-2"
        >
          <div>{todo.text}</div>
          <Button onClick={() => store.deleteTodo(todo.id)}>X</Button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
