import { Todo, todoModel } from "./model";

// 외부에 노출할 엔티티 정의
const TodoAPI = {
  getTodos: () => todoModel.getTodos(),
  addTodo: (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
    };
    todoModel.addTodo(newTodo);
  },
  updateTodo: (id: string, newText: string) => {
    todoModel.updateTodo(id, newText);
  },
  deleteTodo: (id: string) => {
    todoModel.deleteTodo(id);
  },
  toggleTodoCompletion: (id: string) => {
    todoModel.toogleTodoCompletion(id);
  },
  subscribe: (observer: () => void) => todoModel.subscribe(observer),
  unsubscribe: (observber: () => void) => todoModel.unsubscribe(observber),
} as const;

export type { Todo } from "./model";
export default TodoAPI;
