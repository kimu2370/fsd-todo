import useTodoStore from "./useTodoStore";

const TodoList = () => {
  const [todos] = useTodoStore();

  return (
    <div className="flex flex-col justify-center">
      {todos.map((todo) => (
        <div key={todo.id}>{todo.text}</div>
      ))}
    </div>
  );
};

export default TodoList;
