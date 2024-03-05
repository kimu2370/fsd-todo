import { todoModel } from "./model";
import { Todo } from "./types";

export const TodoAPI = {
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
